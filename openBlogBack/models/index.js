const { Sequelize } = require('sequelize')
const dbConfig = require('../db.config')

const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
})

module.exports = {
    instance,
    users: require('./users')(instance),
    posts: require('./posts')(instance),
    comments: require('./comments')(instance),
    subjects: require('./subjects')(instance),
    //reactions: require('./reactions')(instance),
    //tags: require('./tags')(instance),
}