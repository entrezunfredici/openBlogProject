const { dataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('users', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
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
        role: {
            type: dataTypes.STRING,
            defaultValue: 'user'
        }
    })
}