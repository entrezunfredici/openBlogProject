const router = require('express').Router();
const usersController = require('../controllers/usersController');

// route for get all users
router.get('/id/:id', usersController.getUserById);
// Route pour récupérer un utilisateur avec ses posts
router.get('/id/:id/posts', usersController.getUserWithPosts);
// route for get user by username
router.get('/username/:username', usersController.getUserByUSername);
// route pour obtenir le rôle d'un utilisateur
router.get('/role/:id', usersController.getRole);
// route for register
router.post('/register', usersController.register);
// Route pour la connexion
router.post('/login', usersController.login);
// Route pour modifier un utilisateur
router.post('/:id', usersController.updateUser);
// route pour modifier le mot de passe
router.post('/updatePassword/:id', usersController.updatePassword);
// route pour modifier le rôle d'un utilisateur
router.post('/updateRole/:id', usersController.updateRole);

// Routes pour augmenter/diminuer le nombre de posts et de followers
router.put('/decreaceNbPosts/:id', usersController.decreaceNbPosts);
router.put('/increaseNbPosts/id=:id', usersController.increaseNbPosts);
router.put('/increaseNbFollowers/:id', usersController.increaseNbFollowers);
router.put('/decreaceNbFollowers/:id', usersController.decreaceNbFollowers);

module.exports = router;
