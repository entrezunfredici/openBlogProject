const { dataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('reports', {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false
        },
        contentType: {
            type: dataTypes.STRING,
            allowNull: false
        },
        reportedElementId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        content: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        status: {
            type: dataTypes.STRING,
            allowNull: false
        },
        userId: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    })
}