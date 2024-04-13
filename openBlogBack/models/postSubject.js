const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('postsSubjects', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subjectId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
}