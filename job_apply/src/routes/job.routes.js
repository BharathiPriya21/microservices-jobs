// const{Router}=require('express');
// const jobController=require('../controllers/jobs.controller');
// // const { candidateByJobId } = require('../models/jobs.model');

// const router=Router();

// router.post('/postJobs',jobController.createJob);
// router.get('/getJob',jobController.getJob);
// router.get('/getJobById/:job_id',jobController.getJobById);
// router.put('/updateJobById/:job_id',jobController.updateJob);
// router.delete('/deleteJobById/:job_id',jobController.deleteJob);
// router.get('/candidateByJobId/:job_id',jobController.candidateByJobId);
// router.get('/getJobStatus/:job_status', jobController.getJobByStatus);


// module.exports=router;

const { Router } = require('express');
const jobController = require('../controllers/job.controllers');
const authenticateLoginAdmin = require('../middlewares/auth.middleware');

const router = Router();

router.post('/postJobs', authenticateLoginAdmin, jobController.createJob);
router.get('/getJob', authenticateLoginAdmin, jobController.getJob);
router.get('/getJobById/:job_id', authenticateLoginAdmin, jobController.getJobById);
router.put('/updateJobById/:job_id', authenticateLoginAdmin, jobController.updateJob);
router.delete('/deleteJobById/:job_id', authenticateLoginAdmin, jobController.deleteJob);
router.get('/candidateByJobId/:job_id', authenticateLoginAdmin, jobController.candidateByJobId);
router.get('/getJobStatus/:job_status', authenticateLoginAdmin, jobController.getJobByStatus);

module.exports = router;
