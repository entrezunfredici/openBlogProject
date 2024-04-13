const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('comments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
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
        }
    })
}