const express=require('express');
const db=require ("../jobs_app/src/config/dbconfig");
const adminRoute=require("../jobs_app/src/routes/admin.routes");
const jobRoute=require('../jobs_app/src/routes/jobs.routes');
const candidateRoute=require('../jobs_app/src/routes/candidates.routes');
const interviewRoute=require('../jobs_app/src/routes/interviews.routes');
const jobApplyRoute=require('../jobs_app/src/routes/jobApply.routes')


const app=express()

app.use(express.json());
const PORT=3000;

app.use("/api/admins",adminRoute);
app.use('/api/jobs',jobRoute);
app.use('/api/candidates',candidateRoute);
app.use('/api/interviews',interviewRoute);
app.use('/api/jobapply',jobApplyRoute)

//listen method used to start the server to listen the encrypted connection
// app.listen(3000,()=>
// {

//     console.log("running.................")

// })
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ Server running on port ${PORT}`);
});