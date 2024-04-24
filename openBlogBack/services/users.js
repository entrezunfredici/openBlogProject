const { users } = require('../../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.getUsers = async () => {
    return await users.findAll({attributes: {exclude: ['password']}})
}

exports.getUserByUsername = async (username) => {
    return await users.findOne({
        where: {
            username
        },
        attributes: {exclude: ['password']}
    })
}

exports.getUserById = async (id) => {
    return await users.findOne({
        where: {
            id
        },
        attributes: {exclude: ['password']}
    })
}

exports.addUser = async (username, password, email) => {
    const existingUser = await this.getUserByUsername(username)
    if (existingUser) {
        throw new BadRequest('user already exists')
    }
    return bcrypt.hash(password, 10).then((hash) => {
        return users.create({username, password: hash, email, role: 'user'})
    }).catch((e) => {
        throw new ServerError('Error when performing bcrypt: ', e.message)
    })
}

exports.updateUser = async (id, userName, password, email, userPhoto, description) => {
    return bcrypt.hash(password, 10).then((hash) => {
        return contact.update({userName, password: hash, email, userPhoto, description}, {where: {id}})
    }).catch((e) => {
        throw new ServerError('Error when performing bcrypt: ', e.message)
    }) 
}

exports.login = async (username, password) => {
    const user = await this.getUserByUsername(username)
    if (!user) {
        throw new NotFound('no user found for username: ' + username)
    }

    const verifiedUser = await bcrypt.compare(password, user.password)
    if (!verifiedUser) {
        throw new NotLogged('password incorrect for username')
    }
    
    const token = jwt.sign({
        data: {id: user.id, username: user.username}
    }, process.env.SECRET, {
        expiresIn: '30s'
    })
    return token
}

exports.updateUserRôle = async (id, role) => {
    return users.update({role}, {where: {id}})
}

exports.deleteUserByID = async (id) => {
    return users.destroy({where: {id}})
}