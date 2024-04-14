const express = require('express')
const app = express()

app.use(express.json())

const subjectsrouter = require('./routers/subjects')
app.use('/subjects', subjectsrouter)

const postsrouter = require('./routers/posts')
app.use('/posts', postsrouter)

module.exports = app
