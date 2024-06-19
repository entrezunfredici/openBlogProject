const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('reactions', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        postId: {
            type: DataTypes.INTEGER, 
            allowNull: false,
            references: {
                model: 'posts', // nom du modèle référencé
                key: 'id'
            }
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users', // nom du modèle référencé
                key: 'id'
            }
        },
        type: {
            type: DataTypes.ENUM('like', 'dislike', 'report'),
            allowNull: false
        }
    })
}