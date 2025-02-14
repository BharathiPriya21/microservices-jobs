const db=require('../config/dbconfig');
const queries=require('../models/jobApply.model');
require('dotenv').config();
const nodemailer = require("nodemailer");


//createapply
const createJobApply=async(req,res)=>
{
    const{candidate_id,job_id,candidate_name,email,phone,address,experience,school_name,college,cgpa,yop,resume_url,candidates_status}=req.body;
    try{
        const ByEmail= await db.query(queries.findByEmail,[job_id,email]);

        if (ByEmail.rows.length > 0) {
          
            return res.status(400).json({ message: "You have already applied for this job "});
            
        }

        //insert if candidate not  applied for that job
        await db.query(queries.createJobApply,[candidate_id, job_id, candidate_name, email, phone, address, experience, school_name, college, cgpa, yop, resume_url, candidates_status]);

        //send mail to the new candidate who appliedd
        // const nodemailer = require("nodemailer");
        // const sender = nodemailer.createTransport({
        //     service: "gmail",
        //     //it will send the mail diredctly without using authention
        //     sendmail: true, 
        // });
    //     const mailOptions = {
    //     from: "bharathianandhan2000@gmail.com",
    //     to: "shalini2424tech@gmail.com",
    //     subject: "Job Application Confirmation",
    //     text: `Hi ${candidate_name},You have successfully applied for job ID: ${job_id}.Thank you`
    // }
    // sender.sendMail(mailOptions)
    //     .then(() => 
    //         { return res.status(201).json({ message: "Job application submitted successfully." })
    // })
    //     .catch(err =>
            
    //         { console.log(err)
    //             return res.status(500).json({ message: " email failed to send.", error: err })} );




    
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "bharathipriya20112000@gmail.com",
        subject: "Job Application Confirmation",
        text: `Hi ${candidate_name},You have successfully applied for the job Thank you!`
        
        
    }
    console.log("email send");
    transporter.sendMail(mailOptions)
        .then(() => 
            {return res.status(201).json({ message: "Job application submitted successfully." })})
        .catch(err => 
            
            {    console.log(err)
                return res.status(500).json({ message: "Application saved, but email failed to send.", error: err })
    });
    

    }

    catch(error)
    {
        console.log(error)
        res.status(500).json({ message: "Error occurred", error: error });
    }

}


//createjobapply
// const createJobApply=async(req,res)=>
// {
   
//     const{candidate_id,job_id,candidate_name,email,phone,address,experience,school_name,college,cgpa,yop,resume_url,candidates_status}=req.body;
//     console.log(candidates_status);
//     db.query(queries.createJobApply,[candidate_id,job_id,candidate_name,email,phone,address,experience,school_name,college,cgpa,yop,resume_url,candidates_status])

//     .then(()=>{
//         return res.status(200).json({message:"jobapply created successfully" })
//     })
//     .catch((err)=>
//     {
//         console.log(err);
//         return res.status(400).json({message:"error occured",error:err});
//     })
// }

//getjobapply
const getJobApply=async(req,res)=>
{
    db.query(queries.getJobApply)
    .then((result)=>{
        return res.status(200).json(result.rows)
    })
    .catch((err)=>
    {
        return res.status(400).json({message:"error occured",error:err});
    })
}

//getbyid
const getJobApplyById=async(req,res)=>
{
    const job_apply_id=req.params.job_apply_id;
        db.query(queries.getJobApplyById,[job_apply_id])
        .then((result)=>{
            return res.status(200).json(result.rows)
        })
        .catch((err)=>
        {
            return res.status(400).json({message:"error occured",error:err});
        })
    }
//update
const updateJobApply=async(req,res)=>
{
    const { job_apply_id } = req.params; 
   
    const {candidate_id,job_id,candidate_name,email,phone,address,experience,school_name,college,cgpa,yop,resume_url,candidates_status}=req.body;

    db.query(queries.updateJobApply,[candidate_id,job_id,candidate_name,email,phone,address,experience,school_name,college,cgpa,yop,resume_url,candidates_status,job_apply_id])
    .then((result)=>{
        return res.status(200).json({message:"updated successfully" })
    })
    .catch((err)=>
    {
        console.log(err)
        return res.status(400).json({message:"error occured",error:err});
    })
    
}
//delete
const deleteJobApply=async(req,res)=>
{
    const job_apply_id=req.params.job_apply_id;
    db.query(queries.deleteJobApply,[job_apply_id])
    .then((result)=>{
        return res.status(200).json({message:" deleted successfully" })
    })
    .catch((err)=>
    {
        return res.status(400).json({message:"error occured",error:err});
    })
    
           
}
//getallcandiadtesbyjobid
const getCandidateByJobId=async(req,res)=>
{
    const {job_id}=req.params;
    db.query(queries.candidateByJobId,[job_id])
    .then((result)=>
    { 
       
        return res.status(200).json(result.rows);

    })
    .catch((error)=>
    {
        console.log(error)
        return res.status(400).json({message:"error occured",error:error})
    })
}

const getAllCandidatesWithJob = async (req, res) => {
    try {
        
        const getAllCandidates = await db.query(queries.getAllCandidates);
        const candidates = getAllCandidates.rows;

        
        const getAllJobs = await db.query(queries.getAllJobs);
        const jobs = getAllJobs.rows;

       
        const groupedCandidate = candidates.map(candidate => {
            const jobDetails = jobs.find(job => job.job_id === candidate.job_id) 

            return {
                job_id: candidate.job_id,
                candidate_name: candidate.candidate_name,
                email: candidate.email,
                phone: candidate.phone,
                address: candidate.address,
                experience: candidate.experience,
                school_name: candidate.school_name,
                college: candidate.college,
                cgpa: candidate.cgpa,
                yop: candidate.yop,
                resume_url: candidate.resume_url,
                candidates_status: candidate.candidates_status,
                job_details: {
                    job_id: jobDetails.job_id ,
                    title: jobDetails.job_title, 
                    salary: jobDetails.salary,
                    description: jobDetails.job_description 
                }
            };
        });

        res.status(200).json(groupedCandidate);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error occurred", error });
    }
};


//uploads files
// const applyJob = async (req, res) => {
//     try {
//         console.log("Inside applyJob Controller");
//         console.log("Request Body:", req.body);
//         console.log("Uploaded File:", req.file);

//         if (!req.file) {
//             return res.status(400).json({ message: "No file uploaded!" });
//         }

//         const { candidate_name, job_id } = req.body;
//         const resume = req.file.buffer; // Store as binary

//         const result = await pool.query(
//             "INSERT INTO job_apply (candidate_name, job_id, resume) VALUES ($1, $2, $3) RETURNING *",
//             [candidate_name, job_id, resume]
//         );

//         res.status(200).json({
//             message: "Job application submitted successfully!",
//             data: result.rows[0],
//         });
//     } catch (error) {
//         console.error("Error applying for job:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };

module.exports=
{
    createJobApply,
    getJobApply,
    getJobApplyById,
    updateJobApply,
    deleteJobApply,
    getCandidateByJobId,
    getAllCandidatesWithJob,
    // applyJob
}



