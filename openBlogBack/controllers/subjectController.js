const subjects = require('../services/subjects')
const createError = require('http-errors');
const { ServerError } = require('../errors');

exports.getSubjects = async (req, res, next) => {
    try {
        const subjectsList = await subjects.getSubjects()
        res.json(subjectsList)
    } catch (e) {
        next(new ServerError('Error when getting subjects: ', e.message))
    }
}

exports.getSubjectById = async (req, res, next) => {
    try {
        const subject = await subjects.getSubjectById(req.params.id)
        if (!subject) {
            return next(createError(404, 'Subject not found'))
        }
        res.json(subject)
    } catch (e) {
        next(new ServerError('Error when getting subject by id: ', e.message))
    }
}

exports.getSubjectByName = async (req, res, next) => { 
    try {
        const subject = await subjects.getSubjectByName(req.params.name)
        if (!subject) {
            return next(createError(404, 'Subject not found'))
        }
        res.json(subject)
    } catch (e) {
        next(new ServerError('Error when getting subject by name: ', e.message))
    }
}

exports.getSubjectsByPostId = async (req, res, next) => {
    try{
        const subject = await subjects.getSubjectsByPostId(req.params.postId)
        if (!subject) {
            return next(createError(404, 'Subject not found'))
        }
    } catch (e) {
        next(new ServerError('Error when getting subject by post id: ', e.message))
    }
}

exports.incrementNbPost = async (req, res, next) => {
    try {
        const subject = await subjects.incrementNbPost(req.params.id)
        res.json({ message: 'NbPosts incremented' });
    } catch (e) {
        next(new ServerError('Error when incrementing nbPost: ', e.message))
    }
}

exports.createSubject = async (req, res, next) => {
    try {
        const subject = await subjects.createSubject(req.body.name)
        res.json(subject)
    } catch (e) {
        next(new ServerError('Error when creating subject: ', e.message))
    }
}

exports.deleteSubject = async (req, res, next) => {
    try {
        const subject = await subjects.deleteSubject(req.params.id)
        res.json(subject)
    } catch (e) {
        next(new ServerError('Error when deleting subject: ', e.message))
    }
}
