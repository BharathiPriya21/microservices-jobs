//  const {Router}=require('express');
// const candidateController=require('../controllers/candidates.controllers');
// // const { candidateStatus } = require('../models/candidates.model');

// const router=Router();
// router.get('/getCandidate',candidateController.getCandidate);
// router.get('/getCandidateById/:candidate_id',candidateController.getCandidateById);
// router.post('/postCandidate',candidateController.createCandidate);
// router.put('/updateCandidate/:candidate_id',candidateController.updateCandidate);
// router.delete('/deleteCandidate/:candidate_id',candidateController.deleteCandidate);
// router.get('/getCandidateInterviewDate/:candidate_id',candidateController.candidateInterviewData);
// router.get('/getCandidateStatus/:candidate_status',candidateController.candidateStatus)


// module.exports=router;


const { Router } = require("express");
const candidateController = require("../controllers/candidates.controllers");
const authenticateLoginAdmin = require("../middlewares/auth.middleware");

const router = Router();

router.get('/getCandidate', authenticateLoginAdmin, candidateController.getCandidate);
router.get('/getCandidateById/:candidate_id', authenticateLoginAdmin, candidateController.getCandidateById);
router.post('/postCandidate', authenticateLoginAdmin, candidateController.createCandidate);
router.put('/updateCandidate/:candidate_id', authenticateLoginAdmin, candidateController.updateCandidate);
router.delete('/deleteCandidate/:candidate_id', authenticateLoginAdmin, candidateController.deleteCandidate);
router.get('/getCandidateInterviewDate/:candidate_id', authenticateLoginAdmin, candidateController.candidateInterviewData);
router.get('/getCandidateStatus/:candidate_status', authenticateLoginAdmin, candidateController.candidateStatus);

module.exports = router;
