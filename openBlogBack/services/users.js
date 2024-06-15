const { users, posts } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { NotFound, NotLogged, BadRequest, ServerError } = require('../errors');

exports.getUsers = async () => {
    return await users.findAll({ attributes: { exclude: ['password'] } })
}

exports.getUserByUsername = async (username) => {
    return await users.findOne({
        where: {
            username
        },
        attributes: { exclude: ['password'] }
    })
}

exports.getUserByUsernameWithPassword = async (username) => {
    return await users.findOne({
        where: {
            username
        }
    })
}

exports.getUserById = async (id) => {
    return await users.findOne({
        where: {
            id
        },
        attributes: { exclude: ['password'] }
    });
}

exports.getUserWithPosts = async (userId) => {
    return await users.findOne({
        where: { id: userId },
        attributes: { exclude: ['password'] },
        include: [posts]  // Inclure les posts de l'utilisateur
    });
};

exports.getRole = async (id) => {
    const user = await users.findOne({ where: { id } })
    return user.role
}

exports.addUser = async (username, password, email) => {
    const existingUser = await this.getUserByUsername(username)
    if (existingUser) {
        throw new BadRequest('user already exists')
    }
    return bcrypt.hash(password, 10).then((hash) => {
        return users.create({username, password: hash, email})
    }).catch((e) => {
        throw new ServerError('Error when performing bcrypt: ', e.message)
    })
}

exports.updateUser = async (id, username, password, email, userPhoto, description) => {
    const user= await users.findOne({ where: { id } })
    const verifiedUser = await bcrypt.compare(password, user.password);
    if (!verifiedUser) {
        throw new NotLogged('password incorrect for username');
    }
    user.update({ username, email, userPhoto, description })
    return this.createToken(user);
}

exports.updatePassword = async (id, password, confirmPassword) => {
    const user= await users.findOne({ where: { id } })
    if(password !== confirmPassword) {
        throw new BadRequest('passwords do not match')
    }
    return bcrypt.hash(password, 10).then((hash) => {
        return user.update({password: hash})
    }).catch((e) => {
        throw new ServerError('Error when performing bcrypt: ', e.message)
    })
}

exports.login = async (username, password) => {
    const user = await this.getUserByUsernameWithPassword(username);
    if (!user) {
        throw new NotFound('no user found for username: ' + username);
    }

    const verifiedUser = await bcrypt.compare(password, user.password);
    if (!verifiedUser) {
        throw new NotLogged('password incorrect for username');
    }
    return this.createToken(user);
}

exports.createToken = async (user) => {
    if (!process.env.SECRET) {
        throw new Error('SECRET environment variable is not defined');
    }

    return jwt.sign({
        data: { id: user.id, username: user.username, email: user.email, description: user.description, userPhoto: user.userPhoto}
    }, process.env.SECRET, {
        expiresIn: '30s'
    });
}

exports.updateRole = async (id, role) => {
    console.log(`id: ${id}, role: ${role}`);
    try {
        return await users.update({ role }, { where: { id } });
    } catch (e) {
        throw new ServerError(e.message);
    }
}

exports.deleteUserByID = async (id) => {
    return users.destroy({ where: { id } })
}

exports.increaseNbPosts = async (id) => {
    const user = await users.findOne({ where: { id } })
    return user.update({ nbPosts: user.nbPosts + 1 })
}

exports.increaseNbFollowers = async (id) => {
    const user = await users.findOne({ where: { id } })
    return user.update({ followers: user.followers + 1 })
}

exports.decreaseNbFollowers = async (id) => {
    const user = await users.findOne({ where: { id } })
    return user.update({ followers: user.followers - 1 })
}

exports.decreaseNbPosts = async (id) => {
    const user = await users.findOne({ where: { id } })
    return user.update({ nbPosts: user.nbPosts - 1 })
}
