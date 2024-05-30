require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// const crypto = require('crypto');
// const secretKey = crypto.randomBytes(64).toString('hex');
// console.log(secretKey);

// // Récupérer la valeur de la variable d'environnement SECRET
// const secret = process.env.SECRET;

// // Afficher la valeur de la variable d'environnement SECRET
// console.log("La valeur de la variable d'environnement SECRET est :", secret);

app.use(cors());

app.use(express.json())

const subjectsrouter = require('./routers/subjects')
app.use('/subjects', subjectsrouter)

const postsrouter = require('./routers/posts')
app.use('/posts', postsrouter)

const usersrouter = require('./routers/users')
app.use('/users', usersrouter)

module.exports = app
