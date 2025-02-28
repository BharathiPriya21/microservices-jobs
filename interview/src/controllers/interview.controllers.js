const db=require('../config/dbconfig');
const queries=require('../models/interview.models');
require('dotenv').config();

//createinterview
const createInterview=async(req,res)=>
{
    const{candidate_id,interview_date,interview_status,feedback}=req.body;
    db.query(queries.createInterview,[candidate_id,interview_date,interview_status,feedback],(err,result)=>
    {
        if(err)
        {
           return res.status(400).json({message:"error occured",error:err});
        }
     
           return res.status(200).json({message:"interviews created successfully" ,data:result.rows});
        
    })
}
//getinterviews
const getInterview=async(req,res)=>
{
    db.query(queries.getInterview,(err,result)=>
    {
        if(err)
            {
                return res.status(400).json({message:"error occured",error:err});
            }
            
               return res.status(200).json(result.rows);
             
    })
}
//getinterviewbyid
const getInterviewById=async(req,res)=>
{
    const interview_id=req.params.interview_id;
        db.query(queries.getInterviewById,[interview_id],(err,result)=>
        {
            if(err)
            {
               return res.status(400).json({message:"error occured",error:err});
            }
           
               return res.status(200).json(result.rows[0]);
            
        })
}

//updateinterviews
const updateInterview=async(req,res)=>
{
    // const interview_id=req.params.interview_id;
    // const candidate_id=req.body.candidate_id;
    // const interview_date=req.body.interview_date;
    // const interview_status=req.body.interview_status;
    // const feedback=req.body.feedback;
  const {candidate_id,interview_date,interview_status,feedback,interview_id}=req.body
    db.query(queries.updateInterview,[candidate_id,interview_date,interview_status,feedback,interview_id],(err,result)=>
    {
        if(err)
        {
           return res.status(400).json({message:"error occured",error:err});
        }
        
            return res.status(200).json({message:"interviews  updated successfully" ,data:result.rows});
        
    })

}
//deleteinterviews
const deleteInterview=async(req,res)=>
{
    const interview_id=req.params.interview_id;
    db.query(queries.deleteInterview,[interview_id],(err,result)=>
    {
        if(err)
        {
           return res.status(400).json({message:"error occured",error:err});
        }
        
           return res.status(200).json({message:"interviews  deleted successfully"});
        
        
    })

}

module.exports={
    createInterview,
    getInterview,
    getInterviewById,
    updateInterview,
    deleteInterview

}

// const db = require('../config/dbconfig');
// const queries = require('../models/jobApply.model');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// const createJobApply = async (req, res) => {
//     const { candidate_id, job_id, candidate_name, email, phone, address, experience, school_name, college, cgpa, yop, resume_url, candidates_status } = req.body;

//     try {
//         // Check if candidate already applied
//         const checkResult = await db.query("SELECT job_id, title FROM job_applications WHERE job_id = $1 AND email = $2", [job_id, email]);

//         if (checkResult.rows.length > 0) {
//             return res.status(400).json({ message: You have already applied for ${checkResult.rows[0].title}. });
//         }

//         // Insert application
//         await db.query(queries.createJobApply, [candidate_id, job_id, candidate_name, email, phone, address, experience, school_name, college, cgpa, yop, resume_url, candidates_status]);

//         // Send email confirmation
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
//         });

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: "Job Application Confirmation",
//             text: Hi ${candidate_name},\n\nYou have successfully applied for job ID: ${job_id}.\n\nThank you!
//         };

//         transporter.sendMail(mailOptions)
//             .then(() => res.status(201).json({ message: "Job application submitted successfully." }))
//             .catch(err => res.status(500).json({ message: "Application saved, but email failed to send.", error: err }));

//     } catch (err) {
//         res.status(500).json({ message: "Error occurred", error: err });
//     }
// };

// module.exports = { createJobApply };