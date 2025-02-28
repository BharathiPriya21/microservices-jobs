// const db=require('../config/dbconfig');
// const queries=require('../models/jobApply.model');
// require('dotenv').config();
// const nodemailer = require("nodemailer");
// const cloudinary=require('cloudinary').v2;

// //configure cloudinary
// cloudinary.config({
//     cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
//     api_key:process.env.CLOUDINARY_API_KEY,
//     api_secret:process.env.CLOUDINARY_API_SECRET
// });

// //createapply
// const createJobApply=async(req,res)=>
// {
//     const{candidate_id,job_id,candidate_name,email,phone,address,experience,school_name,college,cgpa,yop,candidates_status}=req.body;
//     if(!req.file)
//     {
//         return res.status(400).json({message:"resume file required"})
//     }
//     // const resume_url=req.file.buffer;
//     const resume_url = req.file.buffer.toString('base64');

//     try{
//         const ByEmail= await db.query(queries.findByEmail,[job_id,email]);

//         if (ByEmail.rows.length > 0) {
          
//             return res.status(400).json({ message: "You have already applied for this job "});
//         }

//         //insert if candidate not  applied for that job
//         await db.query(queries.createJobApply,[candidate_id, job_id, candidate_name, email, phone, address, experience, school_name, college, cgpa, yop, resume_url, candidates_status]);

//         //send mail to the new candidate who appliedd
//         // const nodemailer = require("nodemailer");
//         // const sender = nodemailer.createTransport({
//         //     service: "gmail",
//         //     //it will send the mail diredctly without using authention
//         //     sendmail: true, 
//         // });
//     //     const mailOptions = {
//     //     from: "bharathianandhan2000@gmail.com",
//     //     to: "shalini2424tech@gmail.com",
//     //     subject: "Job Application Confirmation",
//     //     text: `Hi ${candidate_name},You have successfully applied for job ID: ${job_id}.Thank you`
//     // }
//     // sender.sendMail(mailOptions)
//     //     .then(() => 
//     //         { return res.status(201).json({ message: "Job application submitted successfully." })
//     // })
//     //     .catch(err =>
            
//     //         { console.log(err)
//     //             return res.status(500).json({ message: " email failed to send.", error: err })} );




    
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
//     });

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: "bharathipriya20112000@gmail.com",
//         subject: "Job Application Confirmation",
//         text: `Hi ${candidate_name},You have successfully applied for the job Thank you!`
        
        
//     }
//     console.log("email send");
//     transporter.sendMail(mailOptions)
//         .then(() => 
//             {return res.status(201).json({ message: "Job application submitted successfully." })})
//         .catch(err => 
            
//             {    console.log(err)
//                 return res.status(500).json({ message: "Application saved, but email failed to send.", error: err })
//     });
    

//     }

//     catch(error)
//     {
//         console.log(error)
//         res.status(500).json({ message: "Error occurred", error: error });
//     }

// }


// const db = require('../config/dbconfig');
// const queries = require('../models/jobApply.model');
// const nodemailer = require("nodemailer");
//  require('dotenv').config();
// const cloudinary = require('cloudinary').v2;

// // Cloudinary configuration
// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });

// const createJobApply = async (req, res) => {
//     const { candidate_id, job_id, candidate_name, email, phone, address, experience, school_name, college, cgpa, yop, candidates_status } = req.body;

  
//     if (!req.file) {
//         return res.status(400).json({ message: "Resume file required" });
//     }

//     try {
//         //for uploading the file in th cloudinary 
//         const uploadedResponse = await cloudinary.uploader.upload(req.file.buffer, {
//             folder: "resumes", // Folder in Cloudinary
//             resource_type: "auto" // Automatically detect the file type
//         });

//         // Cloudinary URL
//         const resume_url = uploadedResponse.secure_url;

//         // Check if candidate has already applied for the job
//         const ByEmail = await db.query(queries.findByEmail, [job_id, email]);

//         if (ByEmail.rows.length > 0) {
//             return res.status(400).json({ message: "You have already applied for this job" });
//         }

//         // Insert candidate details along with the Cloudinary URL
//         await db.query(queries.createJobApply, [
//             candidate_id, job_id, candidate_name, email, phone, address, experience,
//             school_name, college, cgpa, yop, resume_url, candidates_status
//         ]);

//         // Send confirmation email
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
//         });

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: email,  
//             subject: "Job Application Confirmation",
//             text: `Hi ${candidate_name}, You have successfully applied for the job. Thank you!`
//         };

//         console.log("Sending email...");
//         transporter.sendMail(mailOptions)
//             .then(() => res.status(201).json({ message: "Job application submitted successfully." }))
//             .catch(err => {
//                 console.log(err);
//                 return res.status(500).json({ message: "Application saved, but email failed to send.", error: err });
//             });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Error occurred while uploading to Cloudinary", error: error });
//     }
// };

// module.exports = { createJobApply };


const db = require('../config/dbconfig');
const queries = require('../models/jobApply.model');
const nodemailer = require("nodemailer");
 require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const {Readable}=require('stream')



cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const createJobApply = async (req, res) => {
    const { candidate_id, job_id, candidate_name, email, phone, address, experience, school_name, college, cgpa, yop, candidates_status } = req.body;
    const files=req.file;
    if (!req.file) {
        return res.status(400).json({ message: "Resume file required" });
    }

    try {
        // Upload file to Cloudinary from buffer directly
        // const uploadedResponse = await cloudinary.uploader.upload(req.file, {
        //     // Folder in Cloudinary
        //     folder: "resumes", 
        //     // Automatically detect the file type
        //     resource_type: "auto" 
        // });
        let url="";
        const uploadStream =await cloudinary.uploader.upload_stream(
            {  folder: "jobs" ,  resource_type: 'auto', public_id: files.originalname },
            (error, result) => {
                if (error)
                    console.log (error);
                // console.log(result.secure_url)
                url= result.secure_url; 
                // Returns the file's URL
            }
        );
        // Convert buffer to stream and pipe to uploadStream
        const stream = Readable.from(files.buffer);
        stream.pipe(uploadStream);
      

        // Cloudinary URL
        const resume_url = url;
        console.log(url)

        // Check if candidate has already applied for the job
        const ByEmail = await db.query(queries.findByEmail, [job_id, email]);

        if (ByEmail.rows.length > 0) {
            return res.status(400).json({ message: "You have already applied for this job" });
        }

        // Insert candidate details along with the Cloudinary URL
        await db.query(queries.createJobApply, [
            candidate_id, job_id, candidate_name, email, phone, address, experience,
            school_name, college, cgpa, yop, resume_url, candidates_status
        ]);

        // Send confirmation email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,  
            subject: "Job Application Confirmation",
            text: `Hi ${candidate_name}, You have successfully applied for the job. Thank you!`
        };

        console.log("Sending email...");
        transporter.sendMail(mailOptions)
            .then(() => res.status(201).json({ message: "Job application submitted successfully." }))
            .catch(err => {
                console.log(err);
                return res.status(500).json({ message: "Application saved, but email failed to send.", error: err });
            });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error occurred while uploading to Cloudinary", error: error });
    }
};


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


module.exports=
{
    createJobApply,
    getJobApply,
    getJobApplyById,
    updateJobApply,
    deleteJobApply,
    getCandidateByJobId,
    getAllCandidatesWithJob
}



