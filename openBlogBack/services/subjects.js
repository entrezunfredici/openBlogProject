const { subjects, postSubject } = require('../models')
const { NotFound, NotLogged, BadRequest, ServerError } = require('../errors');

exports.getSubjectByName = async(subjectName) => {
    return await subjects.findOne({
        where: {
            name: subjectName
        }
    })
}

exports.getSubjectById = async(subjectId) => {
    return await subjects.findOne({
        where: {
            id: subjectId
        }
    })
}

exports.getSubjectsByPostId = async(postId) => {
    return await postSubject.findAll({
        where: {
            postId: postId
        },
        include: [subjects]
    })
}

exports.getSubjects = async() => {
    return await subjects.findAll()
}

exports.createSubject = async(name) => {
    const existingSubject = await this.getSubjectByName(name);
    if(existingSubject) {
        return existingSubject;
    } else {
        return subjects.create({ name: name });
    }
}

exports.incrementNbPost = async(subjectId) => {
    return subjects.increment('nbPosts', { where: { id: subjectId } });
}

exports.deleteSubject = async(name) => {
    return subjects.destroy({
        where: {
            id: name
        }
    })
}
