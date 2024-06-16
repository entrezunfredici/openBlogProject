const postsService = require('../services/posts');
const usersService = require('../services/users');
const createError = require('http-errors');
const { ServerError } = require('../errors');

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await postsService.getPosts();
        res.json(posts);
    } catch (error) {
        next(new ServerError());
    }
}

exports.getPostById = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const post = await postsService.getPostById(postId);
        if (!post) {
            throw createError(404, 'Post not found');
        }
        res.json(post);
    } catch (error) {
        next(new ServerError());
    }
}

exports.getPostsByAuthorId = async (req, res, next) => {
    try {
        const authorId = req.params.id;
        const posts = await postsService.getPostsByAuthorId(authorId);
        res.json(posts);
    } catch (error) {
        next(new ServerError());
    }
}

exports.getPostsByTitle = async (req, res, next) => {
    try {
        const title = req.params.title;
        const posts = await postsService.getPostsByTitle(title);
        res.json(posts);
    } catch (error) {
        next(new ServerError());
    }
}

exports.getReactions = async (req, res, next) => {
    try {
        const postId = req.params.id;
        const userId = req.params.userId;
        const type = req.params.type;
        const reaction = await postsService.getReactions(postId, userId, type);
        res.json(reaction);
    } catch (error) {
        next(new ServerError());
    }
}

exports.createPost = async (req, res, next) => {
    try {
        const { title, content, authorId } = req.body;
        //const userId = req.user.id;
        await postsService.createPost(title, content, authorId);
        res.json({ message: 'Post created' });
    } catch (error) {
        next(new ServerError());
    }
}

exports.editPost = async (req, res, next) => {
    try {
        const { title, content, postId } = req.body;
        await postsService.updatePost(postId, title, content);
        res.json({ message: 'Post updated' });
    } catch (error) {
        next(new ServerError());
    }
}

exports.addReaction = async (req, res, next) => {
    try {
        const { postId, userId, type } = req.body;
        if(!await usersService.getUserById(userId)) {
            throw createError(404, 'User not found');
        }
        (await postsService.getReactions(postId, userId, type)) && res.json({ message: "Reaction already exists" });
        if (type === 'like' && await postsService.getReactions(postId, userId, 'dislike')) {
            await postsService.removeReaction(postId, userId, 'dislike');
        }
        if (type === 'dislike' && await postsService.getReactions(postId, userId, 'like')) {
            await postsService.removeReaction(postId, userId, 'like');
        }
        await postsService.addReaction(postId, userId, type);
        res.json({ message: 'Reaction added' });
    } catch (error) {
        next(new ServerError());
    }
}

exports.deletePost = async (req, res, next) => {
    try {
        const postId = req.params.id;
        await postsService.deletePost(postId);
        res.json({ message: 'Post deleted' });
    } catch (error) {
        next(new ServerError());
    }
}

exports.removeReaction = (req, res, next) => {
    try {
        const { postId, userId, type } = req.body;
        //await postsService.removeReaction(postId, userId, type);
        res.json({ message: 'Reaction removed' });
    } catch (error) {
        next(new ServerError());
    }
}

exports.incrementNbComments = async (req, res, next) => {
    try {
        const postId = req.params.id;
        await postsService.incrementNbComments(postId);
        res.json({ message: 'NbComments incremented' });
    } catch (error) {
        next(new ServerError());
    }
}

exports.addSubject = async (req, res, next) => {
    try {
        const { postId, subjectId } = req.body;
        await postsService.addSubject(postId, subjectId)
        res.json({ message: "subject added" })
    } catch (error) {
        next(new 
            ServerError()
        );
    }
}
