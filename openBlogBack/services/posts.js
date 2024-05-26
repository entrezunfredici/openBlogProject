const { users, posts, subjects, postSubject } = require('../models');
const usersService = require('./users');
const { NotFound, NotLogged, BadRequest, ServerError } = require('../errors')

exports.getPosts = async () => {
    return await posts.findAll({
        include: [users],
        attributes: { exclude: ['password'] }
    })
}

exports.getPostById = async (postId) => {
    return await posts.findOne({
        where: {
            id: postId
        },
        include: [users],
        attributes: { exclude: ['password'] }
    })
}

exports.getPostsByAuthorId = async (authorId) => {
    return posts.findAll({
        where: {
            userId: authorId
        },
        include: [users],
        attributes: { exclude: ['password'] }
    })
}

exports.getPostsByTitle = async (title) => {
    return posts.findAll({
        where: {
            title: title
        },
        include: [users],
        attributes: { exclude: ['password'] }
    })
}

exports.createPost = async (title, content, authorId) => {
    return await posts.create({ title, content, userId:authorId });
}

exports.updatePost = async (postId, title, content) => {
    return await posts.update({ title, content }, { where: { id: postId } });
}

exports.deletePost = async (postId) => {
    return await posts.destroy({
        where: {
            id: postId
        }
    })
}

exports.incrementNbComments = async (postId) => {
    return posts.increment('nbComments', { where: { id: postId } });
}

exports.incrementNbLikes = async (postId) => {
    return posts.increment('nbLikes', { where: { id: postId } });
}

exports.incrementNbDislikes = async (postId) => {
    return posts.increment('nbDislikes', { where: { id: postId } });
}

exports.incrementNbReports = async (postId) => {
    return posts.increment('nbReports', { where: { id: postId } });
}

exports.incrementNbViews = async (postId) => {
    return posts.increment('nbViews', { where: { id: postId } });
}

exports.addSubject = async (postId, subjectId) => {
    return postSubject.create({postId: postId, subjectId: subjectId});
}
