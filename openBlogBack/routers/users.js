const router = require('express').Router();
usersController = require('../controllers/usersController');

// Route pour récupérer un utilisateur par ID
router.get('/id/:id', usersController.getUserById);
// Route pour récupérer un utilisateur par nom d'utilisateur
router.get('/username/:username', usersController.getUserByUSername);
// Route pour l'enregistrement
router.post('/register', usersController.register);
// Route pour la connexion
router.post('/login', usersController.login);
// Route pour modifier un utilisateur
router.post('/:id', usersController.updateUser);

// Routes pour augmenter/diminuer le nombre de posts et de followers
router.put('/decreaceNbPosts/:id', usersController.decreaceNbPosts);
router.put('/increaceNbPosts/id=:id', usersController.increaceNbPosts);
router.put('/increaceNbFollowers/:id', usersController.increaceNbFollowers);
router.put('/decreaceNbFollowers/:id', usersController.decreaceNbFollowers);

module.exports = router;
