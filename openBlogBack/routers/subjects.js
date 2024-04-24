const router = require('express').Router(), 
subjectController = require('../controllers/subjectController')

router.get('/all', subjectController.getSubjects)
router.get('/id=:id',subjectController.getSubjectById)
router.get('/name=:name',subjectController.getSubjectByName)
router.post('/create',subjectController.createSubject)
router.put('/incrementNbPosts/id=:id',subjectController.incrementNbPost)
router.delete('/name=:name',subjectController.deleteSubject)

module.exports = router;
