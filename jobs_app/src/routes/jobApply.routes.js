const {Router}=require('express');
const jobApplyController=require('../controllers/jobApply.controller');
const upload =require('../middlewares/upload.middleware')


const router=Router();
router.get('/getJobApply',jobApplyController.getJobApply);
router.get('/getJobApplyById/:job_apply_id',jobApplyController.getJobApplyById);
router.post('/postJobApply',jobApplyController.createJobApply);
router.put('/updateJobApply/:job_apply_id',jobApplyController.updateJobApply);
router.delete('/deleteJobApply/:job_apply_id',jobApplyController.deleteJobApply);
router.get('/candidateByJobId/:job_id',jobApplyController.getCandidateByJobId);
router.get('/candidateWithJob',jobApplyController.getAllCandidatesWithJob);
// router.post(
//     "/apply",
//     (req, res, next) => {
//         console.log("Middleware Hit: Before Multer");
//         next();
//     },
//     upload.single("resume"),
//     (req, res, next) => {
//         console.log("Middleware Hit: After Multer");
//         console.log("Request Body:", req.body);
//         console.log("File Received:", req.file);

//         if (!req.file) {
//             return res.status(400).json({ message: "No file uploaded!" });
//         }

//         next();
//     },
//     jobApplyController.applyJob
// );


module.exports=router;

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
