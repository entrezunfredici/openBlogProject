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

// Définir les associations
users.hasMany(posts, { foreignKey: 'userId' });
posts.belongsTo(users, { foreignKey: 'userId' });

posts.hasMany(postSubject, { foreignKey: 'postId' });
postSubject.belongsTo(posts, { foreignKey: 'postId' });
subjects.hasMany(postSubject, { foreignKey: 'subjectId' });
postSubject.belongsTo(subjects, { foreignKey: 'subjectId' });

// Si vous avez d'autres relations, définissez-les ici.
// Par exemple, si les commentaires sont liés aux utilisateurs et aux posts :
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
    // reactions: require('./reactions')(instance),
    // tags: require('./tags')(instance),
};
