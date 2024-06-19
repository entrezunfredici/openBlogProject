const { users, posts, subjects, postSubject, reactions } = require('../models');
const usersService = require('./users');
const { NotFound, NotLogged, BadRequest, ServerError } = require('../errors')

exports.getPosts = async () => {
    return await posts.findAll({
        include: [users],
        attributes: { exclude: ['password'] },
        order: [['id', 'DESC']]
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

exports.getReactions = async (postId, userId, type) => {
    return reactions.findOne({
        where: {
            postId: postId,
            userId: userId,
            type: type
        }
    });
}

exports.createPost = async (title, content, authorId) => {
    return await posts.create({ title, content, userId:authorId });
}

exports.addReaction = async (postId, userId, type) => {
    console.log("test");
    (type == 'like') && await posts.increment('nbLikes', { where: { id: postId } });
    (type == 'dislike') && await posts.increment('nbDislikes', { where: { id: postId } });
    (type == 'report') && await posts.increment('nbReports', { where: { id: postId } });
    return reactions.create({postId, userId, type});
}

exports.addSubject = async (postId, subjectId) => {
    return postSubject.create({postId: postId, subjectId: subjectId});
}

exports.updatePost = async (postId, title, content) => {
    return await posts.update({ title, content }, { where: { id: postId } });
}

exports.incrementNbComments = async (postId) => {
    return posts.increment('nbComments', { where: { id: postId } });
}

exports.incrementNbViews = async (postId) => {
    return posts.increment('nbViews', { where: { id: postId } });
}

exports.deletePost = async (postId) => {
    return await posts.destroy({
        where: {
            id: postId
        }
    })
}

exports.removeReaction = async (postId, userId, type) => {
    (type == 'like') && await posts.decrement('nbLikes', { where: { id: postId } });
    (type == 'dislike') && await posts.decrement('nbDislikes', { where: { id: postId } });
    (type == 'report') && await posts.decrement('nbReports', { where: { id: postId } });
    return reactions.destroy({
        where: {
            postId: postId,
            userId: userId,
            type: type
        }
    })
}
