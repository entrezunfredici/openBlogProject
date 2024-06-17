const posts = require('../models/posts')

const router = require('express').Router(),
postsController = require('../controllers/postsController')

router.get('/all', postsController.getPosts)
router.get('/id=:id', postsController.getPostById)
router.get('/authorId=:id', postsController.getPostsByAuthorId)
router.get('/title=:title', postsController.getPostsByTitle)
router.get('/getReaction/post=:id&user=:userId&type=:type', postsController.getReactions)
router.post('/create', postsController.createPost)
router.post('/edit', postsController.editPost)
router.post('/addSubject', postsController.addSubject)
router.post('/addReaction', postsController.addReaction)
router.put('/incrementNbComments/id=:id', postsController.incrementNbComments)
router.delete('/delete/:id', postsController.deletePost)
router.delete('/deleteReaction/post=:id&user=:userId&type=:type', postsController.deleteReaction)

module.exports = router;
