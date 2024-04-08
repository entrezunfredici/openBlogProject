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
    if(this.getSubjectByName(name)) {
        throw new BadRequest('subject already exists')
    }else{
        return subjects.create(name)
    }
}

exports.deleteSubject = async(name) => {
    return subjects.destroy({
        where: {
            id: name
        }
    })
}
