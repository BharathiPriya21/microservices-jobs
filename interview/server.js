const express=require('express');
const db=require ("./src/config/dbconfig");
// const adminRoute=require("../jobs_app/src/routes/admin.routes");
// const jobRoute=require('../jobs_app/src/routes/jobs.routes');
// const candidateRoute=require('../jobs_app/src/routes/candidates.routes');
const interviewRoute=require('./src/routes/interview.routes');
// const jobApplyRoute=require('../jobs_app/src/routes/jobApply.routes')
//console.log("Loaded ENV Variables:", process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_API_KEY);


const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
const PORT=3002;

// app.use("/api/admins",adminRoute);
// app.use('/api/jobs',jobRoute);
// app.use('/api/candidates',candidateRoute);
app.use('/api/interviews',interviewRoute);
// app.use('/api/jobapply',jobApplyRoute);

//listen method used to start the server to listen the encrypted connection
// app.listen(3000,()=>
// {

//     console.log("running.................")

// })
app.get("/",(req,res)=>
    {
        return res.status(200).json("interview server connected");
    })
app.listen(PORT, '0.0.0.0', () => {
    console.log(` Server running on port ${PORT} for interview`);
});