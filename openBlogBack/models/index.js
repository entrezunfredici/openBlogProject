const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

const users = require('./users')(instance);
const posts = require('./posts')(instance);
const comments = require('./comments')(instance);
const subjects = require('./subjects')(instance);
const postSubject = require('./postSubject')(instance);
const reactions = require('./reactions')(instance);

// Définir les associations
users.hasMany(posts, { foreignKey: 'userId' });
posts.belongsTo(users, { foreignKey: 'userId' });

posts.hasMany(postSubject, { foreignKey: 'postId' });
postSubject.belongsTo(posts, { foreignKey: 'postId' });
subjects.hasMany(postSubject, { foreignKey: 'subjectId' });
postSubject.belongsTo(subjects, { foreignKey: 'subjectId' });

posts.hasMany(reactions, { foreignKey: 'postId' });
reactions.belongsTo(posts, { foreignKey: 'postId' });
users.hasMany(reactions, { foreignKey: 'userId' });
reactions.belongsTo(users, { foreignKey: 'userId' });

users.hasMany(comments, { foreignKey: 'userId' });
posts.hasMany(comments, { foreignKey: 'postId' });
comments.belongsTo(users, { foreignKey: 'userId' });
comments.belongsTo(posts, { foreignKey: 'postId' });

module.exports = {
    instance,
    users,
    posts,
    comments,
    subjects,
    postSubject,
    reactions,
};
