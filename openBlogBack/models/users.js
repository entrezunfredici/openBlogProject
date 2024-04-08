const { dataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('users', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userPhoto: {
            type: dataTypes.STRING,
            allowNull: false,
            defaultValue: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        userName: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        nbPosts: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        },
        followers: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        },
        description: {
            type: dataTypes.TEXT
        },
        role: {
            type: dataTypes.STRING,
            defaultValue: 'user'
        }
    })
}