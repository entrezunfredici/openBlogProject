const { dataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('subjects', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        nbPosts: {
            type: dataTypes.INTEGER,
            defaultValue: 0
        }
    })
}
