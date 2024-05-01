const router = require('express').Router(),
usersController = require('../controllers/usersController')

router.post('/register', usersController.register)
router.post('/login', usersController.login)

module.exports = router;
