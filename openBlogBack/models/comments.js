const { dataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('comments', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        postId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        nbLikes: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        },
        nbDislikes: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        },
        nbReports: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        }
    })
}