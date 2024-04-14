const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('posts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        nbComments: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        nbLikes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        nbDislikes: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        nbReports: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        nbViews: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    })
}
