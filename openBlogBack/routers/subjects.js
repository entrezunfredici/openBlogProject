const router = require('express').Router(), 
subjectController = require('../controllers/subjectController')

router.get('/all', subjectController.getSubjects)
router.get('/id=:Id',subjectController.getSubjectById)
router.get('/name=:name',subjectController.getSubjectByName)
router.post('/create',subjectController.createSubject)
router.delete('/name=:name',subjectController.deleteSubject)

module.exports = router;
