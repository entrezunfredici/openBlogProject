const router = require('express').Router();
usersController = require('../controllers/usersController');

//route for get all users
router.get('/:id', usersController.getUserById);
//route for get user by username
router.get('/:username', usersController.getUserByUSername);
//route for register
router.post('/register', usersController.register);
//route for login
router.post('/login', usersController.login);
//modify one user
router.post('/:id', usersController.updateUser);
router.put('/decreaceNbPosts/:id', usersController.decreaceNbPosts);
router.put('/increaceNbPosts/id=:id', usersController.increaceNbPosts);
router.put('/increaceNbFollowers/:id', usersController.increaceNbFollowers);
router.put('/decreaceNbFollowers/:id', usersController.decreaceNbFollowers);

module.exports = router;
