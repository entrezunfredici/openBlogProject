const { users, posts, comments } = require('../models');
const usersService = require('./users');
const postsService = require('./users');
const { NotFound, NotLogged, BadRequest, ServerError } = require('../errors')

exports.getComments = async () => {
    return await comments.findAll({
        include: [users],
        attributes: { exclude: ['password'] },
        include: [posts]
    })
}

exports.getCommentsByPostId = async (postId) => {
    return await comments.findAll({
        where: {
            postId: postId
        },
        include: [users],
        attributes: { exclude: ['password'] }
    })
}

exports.getCommentsByAuthorId = async (authorId) => {
    return comments.findAll({
        where: {
            userId: authorId
        },
        include: [users],
        attributes: { exclude: ['password'] },
        include: [posts]
    })
}

exports.getCommmentsById = async (id) => {
    return await comments.findOne({
        where: {
            id: id
        },
        include: [users],
        attributes: { exclude: ['password'] },
        include: [posts]
    })
}

exports.createComment = async ( postId, userId, content ) => {
    return await comments.create({ postId, userId, content });
}

exports.incrementNbLikes = async (id) => {
    return comments.increment('nbLikes', { where: { id: id } });
}

exports.incrementNbDislikes = async (id) => {
    return comments.increment('nbDislikes', { where: { id: id } });
}

exports.incrementNbReports = async (id) => {
    return comments.increment('nbReports', { where: { id:id } });
}

exports.deleteComment = async (id) => {
    return await comments.destroy({
        where: {
            id: id
        }
    })
}
