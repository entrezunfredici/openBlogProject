const { users, posts } = require('../models');
const usersService = require('./users');
const { NotFound, NotLogged, BadRequest, ServerError } = require('../errors')

exports.getPosts = async () => {
    return await posts.findAll()
}

exports.getPostById = async (postId) => {
    return await posts.findOne({
        where: {
            id: postId
        }
    })
}

exports.getPostsByAuthorId = async (authorId) => {
    return posts.findAll({
        where: {
            authorId: authorId
        }
    })
}

exports.getPostsByTitle = async (title) => {
    return posts.findAll({
        where: {
            title: title
        }
    })
}

exports.createPost = async (title, content, authorId) => {
    //userExist = await usersService.getUserById(id);
    //if (!userExist) {
    //    throw new NotFound('User not found')
    //}
    return await posts.create({ title, content, authorId });
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
