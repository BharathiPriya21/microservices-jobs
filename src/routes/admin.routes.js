// const {Router}=require('express');
// const adminController=require('../controllers/admin.controller');
// const authenticateAdmin = require("../middlewares/auth.middleware");


// const router=Router();

// router.post('/postAdmin',adminController.createAdmin);
// router.get('/getAdmin',adminController.getAdmin);
// router.get('/getAdminById/:admin_id',adminController.getAdminById);
// router.put('/updateAdminById/:admin_id',adminController.updateAdmin);
// router.delete('/deleteAdminById/:admin_id',adminController.deleteAdmin);
//  router.post("/login", adminController.loginAdmin);


// module.exports=router;


const { Router } = require("express");
const adminController = require("../controllers/admin.controller");
 const authenticateLoginAdmin = require("../middlewares/auth.middleware");

const router = Router();

router.post("/postAdmin", authenticateLoginAdmin, adminController.createAdmin);
router.get("/getAdmin", authenticateLoginAdmin, adminController.getAdmin);
router.get("/getAdminById/:admin_id", authenticateLoginAdmin, adminController.getAdminById);
router.put("/updateAdminById/:admin_id", authenticateLoginAdmin, adminController.updateAdmin);
router.delete("/deleteAdminById/:admin_id", authenticateLoginAdmin, adminController.deleteAdmin);
 router.post("/login", adminController.loginAdmin);

module.exports = router;
