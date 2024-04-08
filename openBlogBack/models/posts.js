const { dataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('posts', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        creatorId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false
        },
        content: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        nbComments: {
            type: dataTypes.INTEGER,
            defaultValue: 0
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
        },
        nbViews: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        }
    })
}
