const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('subjects', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nbPosts: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    })
}
