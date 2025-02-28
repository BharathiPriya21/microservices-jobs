const express=require('express');
const db=require ("./src/config/dbconfig");
// const adminRoute=require("../jobs_app/src/routes/admin.routes");
// const jobRoute=require('../jobs_app/src/routes/jobs.routes');
const candidateRoute=require('./src/routes/candidate.routes');
// const interviewRoute=require('../jobs_app/src/routes/interviews.routes');
// const jobApplyRoute=require('../jobs_app/src/routes/jobApply.routes')
//console.log("Loaded ENV Variables:", process.env.CLOUDINARY_CLOUD_NAME, process.env.CLOUDINARY_API_KEY);


const app=express()

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
const PORT=3001;

// app.use("/api/admins",adminRoute);
// app.use('/api/jobs',jobRoute);
app.use('/api/candidates',candidateRoute);
// app.use('/api/interviews',interviewRoute);
// app.use('/api/jobapply',jobApplyRoute);

//listen method used to start the server to listen the encrypted connection
// app.listen(3000,()=>
// {

//     console.log("running.................")

// })
app.listen(PORT, '0.0.0.0', () => {
    console.log(` Server running on port ${PORT} for candidates`);
});