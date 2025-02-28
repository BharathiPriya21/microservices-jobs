const db=require('../config/dbconfig');
const queries=require('../models/candidate.models');
require('dotenv').config();

//createcanditaes
const createCandidate=async(req,res)=>
{
   
    const{job_id,candidate_name,email,phone,address,experience,school_name,college_name,cgpa,yop,resume_url,candidates_status}=req.body;
    console.log(candidates_status);
    db.query(queries.createCandidate,[job_id,candidate_name,email,phone,address,experience,school_name,college_name,cgpa,yop,resume_url,candidates_status],(err,result)=>
    {
        if(err)
        {
            console.log(err);
           return res.status(400).json({message:"error occured" ,error:err});
           
        }
        
           return res.status(200).json({message:"candidates created successfully" ,data:result.rows})
       

    })
}

//getcandidate
const getCandidate=async(req,res)=>
{
    db.query(queries.getCandidate,(err,result)=>
    {
        if(err)
        {
            console.log(err);
            return res.status(400).json({message:"error occured" ,error:err});
            
        }
        
           return res.status(200).json(result.rows)
        

    })
}

//getcandiadtebyid
const getCandidateById=async(req,res)=>
{
    const candidate_id=req.params.candidate_id;
        db.query(queries.getCandidateById,[candidate_id],(err,result)=>
        {
            if(err)
            {
                 return res.status(400).json({message:"error occured",error:err});
            }
            
               return res.status(200).json(result.rows[0])
            
    
        })
    }
//UPDATECANDIDATE
const updateCandidate=async(req,res)=>
{
    // const candidate_id=req.params.candidate_id;
    // const job_id=req.params.job_id;
    // const candidate_name=req.body.candidate_name;
    // const email=req.body.email;
    // const phone=req.body.phone;
    // const address=req.body.address;
    // const experience=req.body.experience;
    // const school_name=req.body.school_name;
    // const college_name=req.body.college_name;
    // const cgpa=req.body.cgpa;
    // const yop=req.body.yop;
    // const resume_url=req.body.resume_url;
    // const candidates_status=req.body.candidates_status;
    const {job_id,candidate_name,email,phone,address,experience,school_name,college_name,cgpa,yop,resume_url,candidates_status,candidate_id}=req.body;

    db.query(queries.updateCandidate,[job_id,candidate_name,email,phone,address,experience,school_name,college_name,cgpa,yop,resume_url,candidates_status,candidate_id],(err,result)=>
    {
        if(err)
        {
            console.log(err)
           return res.status(400).json({message:"error occured",error:err});
        }
        
          return  res.status(200).json({message:"candidates updated successfully" ,data:result.rows})
        
    })
}
//deletecandidate
const deleteCandidate=async(req,res)=>
{
    const candidate_id=req.params.candidate_id;
    db.query(queries.deleteCandidate,[candidate_id],(err,result)=>
    {
        if(err)
        {
            return res.status(400).json({message:"error occured",error:err});
        }
        
           return res.status(200).json({message:"candidates deleted successfully" })
        
        
    })
}
//candidateinterview date
const candidateInterviewData=async(req,res)=>
{
    const candidate_id=req.params.candidate_id;
    db.query(queries.candidateInterviewData,[candidate_id],(err,result)=>
    {
        if(err)
        {
            return res.status(400).json({message:"error occured",error:err})
        }
        return res.status(200).json(result.rows);
    })
}
//candidatestatus
const candidateStatus=async(req,res)=>
{
    const candidates_status=req.params.candidate_status;
    db.query(queries.candidateStatus,[candidates_status],(err,result)=>
    {
        if(err)
        {
            console.log(err)
            return res.status(400).json({message:"error occured",error:err})
        }
        return res.status(200).json(result.rows)
    })
}



module.exports={
    createCandidate,
    getCandidate,
    getCandidateById,
    updateCandidate,
    deleteCandidate,
    candidateInterviewData,
    candidateStatus
}