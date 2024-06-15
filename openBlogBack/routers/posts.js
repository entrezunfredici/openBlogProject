const posts = require('../models/posts')

const router = require('express').Router(),
postsController = require('../controllers/postsController')

router.get('/all', postsController.getPosts)
router.get('/id=:id', postsController.getPostById)
router.get('/authorId=:id', postsController.getPostsByAuthorId)
router.get('/title=:title', postsController.getPostsByTitle)
router.get('/getReactions/post::id&user::userId&role::role', postsController.getReactions)
router.post('/create', postsController.createPost)
router.post('/edit', postsController.editPost)
router.post('/addSubject', postsController.addSubject)
router.post('/addReaction', postsController.addReaction)
router.put('/incrementNbComments/id=:id', postsController.incrementNbComments)
router.put('/incrementNbLikes/id=:id', postsController.incrementNbLikes)
router.put('/incrementNbDislikes/id=:id', postsController.incrementNbDislikes)
router.put('/incrementNbReports/id=:id', postsController.incrementNbReports)
router.delete('/delete/:id', postsController.deletePost)
router.delete('/deleteReaction', postsController.deleteReaction)

module.exports = router;
