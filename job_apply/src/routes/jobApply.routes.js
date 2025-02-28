const { Router } = require('express');
const jobApplyController = require('../controllers/jobApply.controllers');
const uploadPdf = require('../middlewares/upload.middleware'); 

const router = Router();

// Define your routes
router.get('/getJobApply', jobApplyController.getJobApply);
router.get('/getJobApplyById/:job_apply_id', jobApplyController.getJobApplyById);

// POST route for job application
router.post('/postJobApply', uploadPdf.single("resume"), jobApplyController.createJobApply);

router.put('/updateJobApply/:job_apply_id', jobApplyController.updateJobApply);
router.delete('/deleteJobApply/:job_apply_id', jobApplyController.deleteJobApply);
router.get('/candidateByJobId/:job_id', jobApplyController.getCandidateByJobId);
router.get('/candidateWithJob', jobApplyController.getAllCandidatesWithJob);

module.exports = router;



// const { Router } = require('express');
// const jobApplyController = require('../controllers/jobApply.controller');
// const authenticateLoginAdmin = require('../middlewares/auth.middleware');

// const router = Router();

// router.get('/getJobApply', authenticateLoginAdmin, jobApplyController.getJobApply);
// router.get('/getJobApplyById/:job_apply_id', authenticateLoginAdmin, jobApplyController.getJobApplyById);
// router.post('/postJobApply', authenticateLoginAdmin, jobApplyController.createJobApply);
// router.put('/updateJobApply/:job_apply_id', authenticateLoginAdmin, jobApplyController.updateJobApply);
// router.delete('/deleteJobApply/:job_apply_id', authenticateLoginAdmin, jobApplyController.deleteJobApply);
// router.get('/candidateByJobId/:job_id',authenticateLoginAdmin,jobApplyController.getCandidateByJobId)
// router.get('/candidateWithJob',authenticateLoginAdmin,jobApplyController.getAllCandidatesWithJob)

// module.exports = router;
