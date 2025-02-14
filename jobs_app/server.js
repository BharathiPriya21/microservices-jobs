const express=require('express');
const path = require("path");
const db=require ("../jobs_app/src/config/dbconfig");
const adminRoute=require("../jobs_app/src/routes/admin.routes");
const jobRoute=require('../jobs_app/src/routes/jobs.routes');
const candidateRoute=require('../jobs_app/src/routes/candidates.routes');
const interviewRoute=require('../jobs_app/src/routes/interviews.routes');
const jobApplyRoute=require('../jobs_app/src/routes/jobApply.routes');
const multer = require("multer");
const upload=require('../jobs_app/src/middlewares/upload.middleware')




const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/admins",adminRoute);
app.use('/api/jobs',jobRoute);
app.use('/api/candidates',candidateRoute);
app.use('/api/interviews',interviewRoute);
app.use('/api/jobapply',jobApplyRoute)
// app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
// app.post('/upload', upload.single('profile'), (req, res) => {
    
//     res.json({
        
//         success: 1,
//         profile_url: `http://localhost:3000/uploads/${req.file.filename}`
//     });
// });
// function errHandler(err,req,res,next)
// {
//     if(err instanceof multer.MulterError)
//     {
//         console.log(err);
//        res.json({
//         success:0,
//         message:err.message,
//        })
//     }
// }
// app.use(errHandler);
//listen method used to start the server to listen the encrypted connection
app.listen(3000,()=>
{

    console.log("running.................")

})

