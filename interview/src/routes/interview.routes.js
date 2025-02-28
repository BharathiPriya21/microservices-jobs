// const{Router}=require('express');
// const interviewController=require('../controllers/interviews.controller');
// const router=Router();

// router.post('/postInterview',interviewController.createInterview);
// router.get('/getInterviews',interviewController.getInterview);
// router.get('/getInterviewById/:interview_id',interviewController.getInterviewById);
// router.put('/updateInterviewById/:interview_id',interviewController.updateInterview);
// router.delete('/deleteInterviewById/:interview_id',interviewController.deleteInterview);

// module.exports=router;

const { Router } = require('express');
const interviewController = require('../controllers/interview.controllers');
const authenticateLoginAdmin = require('../middlewares/auth.middleware');

const router = Router();

router.post('/postInterview', authenticateLoginAdmin, interviewController.createInterview);
router.get('/getInterviews', authenticateLoginAdmin, interviewController.getInterview);
router.get('/getInterviewById/:interview_id', authenticateLoginAdmin, interviewController.getInterviewById);
router.put('/updateInterviewById/:interview_id', authenticateLoginAdmin, interviewController.updateInterview);
router.delete('/deleteInterviewById/:interview_id', authenticateLoginAdmin, interviewController.deleteInterview);

module.exports = router;



