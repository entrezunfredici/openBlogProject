const { subjects } = require('../models')
const { NotFound, NotLogged, BadRequest, ServerError } = require('../errors')

exports.getSubjectByName = async(subjectName) => {
    return subjects.findOne({
        where: {
            name: subjectName
        }
    })
}

exports.getSubjectById = async(subjectId) => {
    return subjects.findOne({
        where: {
            id: subjectId
        }
    })
}

exports.getSubjects = async() => {
    return subjects.findAll()
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
