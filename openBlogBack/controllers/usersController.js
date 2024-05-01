const jwt = require('jsonwebtoken');
const usersService = require('../services/users');
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
    const {username, password, email} = req.body;
    try {
        const user = await usersService.addUser(username, password, email)
        if (!user) {
            throw new ServerError('Cannot register user')
        }
        return res.status(201).json({success: true}).send()
    } catch(e) {
        return next(createError(e.statusCode, e.message))
    }
}

exports.login = async (username, password) => {
    const user = await usersService.getUserByUsernameWithPassword(username)
    if (!user) {
        throw new NotFound('No user found for username:' + username)
    }

    const verifiedUser = await bcrypt.compare(password, user.password)
    if (!verifiedUser) {
        throw new NotLogged('Password incorrect for username')
    }
    const token = jwt.sign({
        data: {id: user.id, username: user.username}
    }, process.env.SECRET, {
            expiresIn: '30s'
        })
    return token
}
