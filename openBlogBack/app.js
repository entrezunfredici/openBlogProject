const express = require('express')
const app = express()

app.use(express.json())

const subjectsrouter = require('./routers/subjects')
app.use('/subjects', subjectsrouter)

module.exports = app
