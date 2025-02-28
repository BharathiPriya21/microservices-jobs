const db=require('../config/dbconfig');
const queries=require('../models/job.models');
require('dotenv').config();

//postjobs
const createJob=async(req,res)=>
{   
    const{admin_id,job_title,job_description,location,salary,skills,job_experience,work_type,job_status,total_application,total_vaccancy}=req.body;
    db.query(queries.createJob,[admin_id,job_title,job_description,location,salary,skills,job_experience,work_type,job_status,total_application,total_vaccancy],(err,result)=>
    {
        if(err)
        {
            return res.status(400).json({message:"error occured",error:err});
        }
       
           return res.status(200).json({message:"jobs created successfully" ,data:result.rows});
        

    })
}

// const createJob = async (req, res) => {
//     try {
//         const {
//             admin_id,
//             job_title,
//             job_description,
//             location,
//             salary,
//             skills,
//             job_experience,
//             work_type,
//             job_status,
//             total_application,
//             total_vaccancy
//         } = req.body;

       
//         const result = await db.query(queries.createJob, [
//             admin_id, job_title, job_description, location, salary, skills,
//             job_experience, work_type, job_status, total_application, total_vaccancy
//         ]);

//         return res.status(200).json({
//             message: "Job created successfully",
//             data: result.rows
//         });

//     } catch (err) {
//         console.error("Error while creating job:", err);
//         return res.status(400).json({
//             message: "Error occurred",
//             error: err.message
//         });
//     }
// };
//getjob
const getJob=async(req,res)=>
    {
        db.query(queries.getJob,(err,result)=>
        {
            if(err)
            {
               return res.status(400).json({message:"error occured",error:err});
            }
            
               return res.status(200).json(result.rows)
            
        })
    }
//getjobbyid
const getJobById=async(req,res)=>
    {   const job_id=req.params.job_id;
        db.query(queries.getJobById,[job_id],(err,result)=>
        {
    
            if(err)
            {
               return res.status(400).json({message:"error occured",error:err});
            }
            
               return res.status(200).json(result.rows[0])
            
        })
    }

//updatejob
const updateJob=async(req,res)=>
{
    // const job_id=req.params.job;
    // const admin_id=req.body.admin_id;
    // const job_title=req.body.job_title;
    // const job_description=req.body.job_description;
    // const location=req.body.location;
    // const salary=req.body.salary;
    // const skills=req.body.skills;
    // const job_experience=req.body.job_experience;
    // const work_type=req.body.work_type;
    // const job_status=req.body.job_status;
    // const total_application=req.body.total_application
    // const total_vaccancy=req.body.total_vaccancy
    const {admin_id,job_title,job_description,location,salary,skills,job_experience,work_type,job_status,total_application,total_vaccancy,job_id}=req.body;

    db.query(queries.updateJob,[admin_id,job_title,job_description,location,salary,skills,job_experience,work_type,job_status,total_application,total_vaccancy,job_id],(err,result)=>
    {
        if(err)
        {
            console.log(err);
           return res.status(400).json({message:"error occured",error:err})
        }
       
          return  res.status(200).json({message:"candidates updated successfully" ,data:result.rows}); 
            
    })
}

//deletejob
const deleteJob=async(req,res)=>{
    const job_id=req.params.job_id;
    db.query(queries.deleteJob,[job_id],(err,reulst)=>
    {
        if(err)
            {
                return res.send(400).json({message:"error occured",error:err})
            }
           
                return res.status(200).json({message:"job deleted successfully"}); 
                
            

    })
}
//getcandidateBYJobid
const candidateByJobId=async(req,res)=>
{
    const job_id=req.params.job_id;
    db.query(queries.candidateByJobId,[job_id],(err,result)=>
    {
        if(err)
        {
            console.log(err)
            return res.status(400).json({message:"error occured",error:err});
        }
        return res.status(200).json(result.rows[0]);
    })
}
// candidateusingJobId
const getJobByStatus = async (req, res) => {
    const { job_status } = req.params; 

    db.query(queries.jobStatus, [job_status], (err, result) => {

        if(err)
            {
                console.log(err)
                return res.status(400).json({message:"error occured",error:err});
            }
            return res.status(200).json(result.rows);
    });
};


module.exports={

    createJob,
    getJob,
    getJobById,
    updateJob,
    deleteJob,
    candidateByJobId,
    getJobByStatus
    
   
}