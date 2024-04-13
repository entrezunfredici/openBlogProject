const jwt = require('jsonwebtoken');
const usersService = require('../services/db/users')
const createError = require('http-errors');
const { ServerError } = require('../errors');

exports.authMiddleware = async (req, res, next) => {
    if (req.headers && !req.headers.authorization) {
        res.status(401).json({success: false, message: 'You need to be authenticated'});
    } else {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodedToken = await jwt.verify(token, process.env.SECRET);
            if (decodedToken) {
                // We can store in req.locals = {} some info about the user to propagate into next controller
                next();
            } else {
                next(createError(401, 'Authentication is no more valid'))
            }
        } catch(e) {
            next(e);
        }
    }
}

exports.register = async (req, res, next) => {
    const {username, password, email} = req.body

    try {
        const user = await usersService.addUser(username, password, email)
        if (!user) {
            throw new ServerError('cannot register user')
        }
        return res.status(201).send()
    } catch(e) {
        return next(createError(e.statusCode, e.message))
    }
}

exports.loginContact = async (username, password) => {
    const contact = await this.getContactByUsernameWithPassword(username)
    if (!contact) {
        throw new NotFound('No user found for username:' + username)
    }

    const verifiedContact = await bcrypt.compare(password, contact.password)
    if (!verifiedContact) {
        throw new NotLogged('Password incorrect for username')
    }

    console.log(contact.id)
    console.log(contact.username)
    const token = jwt.sign({
        data: {id: contact.id, username: contact.username}
    }, process.env.SECRET, {
            expiresIn: '30s'
        })
    return token
}
