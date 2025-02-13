const express=require('express');
const db=require ("./src/config/dbconfig");
const adminRoute=require("./src/routes/admin.routes");
const jobRoute=require('./src/routes/jobs.routes');
const candidateRoute=require('./src/routes/candidates.routes');
const interviewRoute=require('./src/routes/interviews.routes');
const jobApplyRoute=require('./src/routes/jobApply.routes')


const app=express()

app.use(express.json())

app.use("/api/admins",adminRoute);
app.use('/api/jobs',jobRoute);
app.use('/api/candidates',candidateRoute);
app.use('/api/interviews',interviewRoute);
app.use('/api/jobapply',jobApplyRoute)

//listen method used to start the server to listen the encrypted connection
app.listen(3000,()=>
{

    console.log("running.................")

})