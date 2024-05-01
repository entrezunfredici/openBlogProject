const { DataTypes } = require('sequelize'); // Utiliser DataTypes au lieu de DataTypes

module.exports = (instance) => {
    return instance.define('users', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userPhoto: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nbPosts: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        followers: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        description: {
            type: DataTypes.TEXT
        },
        role: {
            type: DataTypes.STRING,
            defaultValue: 'user'
        }
    })
}
