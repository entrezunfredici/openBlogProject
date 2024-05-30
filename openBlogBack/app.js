const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json())

const subjectsrouter = require('./routers/subjects')
app.use('/subjects', subjectsrouter)

const postsrouter = require('./routers/posts')
app.use('/posts', postsrouter)

const usersrouter = require('./routers/users')
app.use('/users', usersrouter)

module.exports = app
