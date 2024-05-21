const { users } = require('../models');
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
    })
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

exports.updateUser = async (id, userName, password, email, userPhoto, description) => {
    const user= await users.findOne({ where: { id } })
    return bcrypt.hash(password, 10).then((hash) => {
        return user.update({ userName, password: hash, email, userPhoto, description })
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
    console.log(user.id+" ; "+user.username);
    const token = jwt.sign({
        data: {id: user.id, username: user.username}
    }, process.env.SECRET, {
        expiresIn: '30s'
    });
    console.log(token);
    return token;
}

exports.updateUserRôle = async (id, role) => {
    return users.update({ role }, { where: { id } })
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
