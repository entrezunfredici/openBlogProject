const { Sequelize } = require('../config/db.config');
const dbConfig = require('../db.config');

const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

module.exports = {
    instance,
    users: require('./users')(instance),
    posts: require('./posts')(instance),
    comments: require('./comments')(instance),
    reactions: require('./reactions')(instance),
    tags: require('./tags')(instance),
}