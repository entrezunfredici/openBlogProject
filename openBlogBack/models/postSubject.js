const { dataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('postsSubjects', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        postId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        subjectId: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    })
}