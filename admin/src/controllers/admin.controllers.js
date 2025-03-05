const db=require('../config/dbconfig');
const queries=require('../models/admin.models');
const bcrypt=require('bcryptjs');
require('dotenv').config();
const jwt = require("jsonwebtoken");

console.log("JWT Secret:", process.env.JWT_SECRET);

//function handle the login process treceive e,p from req bdy and verify if it generate the token
const loginAdmin = async (req, res) => {
    //send login details in req body
    const { email, password } = req.body;
    console.log("Login request received:", email); 

    try {
        //row  containt  thev result of the query
        const { rows } = await db.query(queries.getAdminByEmail, [email]);
        console.log("Database query executed:", rows);
     
        //if it returns an empty array the noadmin found
        if (rows.length === 0) {
            console.log("No user found");
            return res.status(400).json({ message: " user notfound" });
        }
        
        //if admin is found the 1st row was extracted
        const admin = rows[0];
        console.log("user found:", admin.email, "Pass:", admin.password);

       
        //bcrypt.compare() check whether the entered password and bcrypt paawrd in db are matching
        const passwordMatch = await bcrypt.compare(password, admin.password);
        console.log("Password :", passwordMatch);

        //if password does not match it will throw an 400 error with message
        if (!passwordMatch) {
            console.log("Invalid login ");
            return res.status(400).json({ message: "Invalid login details" });
        }

      //jwt is created using jwt.sign()
        const token = await jwt.sign(
            //the token contains admin id and email
            { admin_id: admin.admin_id, email: admin.email },
            //secret key stored in env
            process.env.JWT_SECRET,
            //the token exires in 2hr
            // { expiresIn: "2h" },  
        );

        console.log("Token generated:", token);
       return res.status(200).json({ message: "Login successful", token:token });
    } catch (error) {
        console.error("Error:", error);
       return res.status(500).json({ message: "Server error", error: error.message });
    }
};

//postAdmin
const createAdmin=async(req,res)=>
{
     const{admin_name,email,phone,admin_status,role,password}=req.body;
     try{
        const salt=await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(password,salt);

        db.query(queries.createAdmin,[admin_name,email,phone,admin_status,role,hashedPassword],(err,result)=>
            {
                if(err)
                {
                    console.log(err)
                   return  res.status(400).json({message:"error occurerd",error:err})
                   
                }
                
                  return  res.status(200).json({message:"admin created successfully" ,data:result.rows});
                
            })

     }
     catch(error)
     {
        return  res.status(500).json({message:"server error",error});

     }
    
}
//getAdmin
const getAdmin=async(req,res)=>
{
    db.query(queries.getAdmin,(err,result)=>
    {
        if(err)
        {
            return  res.status(400).json({message:"error occurerd",error:err})
        }
       
            return  res.status(200).json(result.rows);
        
    })
}
//getAdminbyid
const getAdminById=async(req,res)=>
{   const admin_id=req.params.admin_id;
    db.query(queries.getAdminById,[admin_id],(err,result)=>
    {

        if(err)
        {
            return  res.status(400).json({message:"error occurerd",error:err})
        }
        
           return res.status(200).json(result.rows[0])
        
    })
}
//updateAdmin
const updateAdmin=async(req,res)=>
{
    // const admin_id=req.params.admin_id;
    // const admin_name=req.body.admin_name;
    // const email=req.body.email;
    // const phone=req.body.phone;
    // const admin_status=req.body.admin_status;
    // const role=req.body.role;
    const {admin_id,admin_name,email,phone,admin_status,role}=req.body;
    
    try{
        let hashedPassword=password;
        if(password)
        {
            const salt=await bcrypt.genSalt(10);
             hashedPassword=await bcrypt.hash(password,salt);

        }
        
        db.query(queries.updateAdmin,[admin_name,email,phone,admin_status,role,hashedPassword,admin_id],(err,result)=>
            {
               if(err)
               {
              
                return  res.status(400).json({message:"error occurerd",error:err})
               }
               
                res.status(200).json({message:"updated adminss successfully" ,data:result.rows});
               
            })

    }
    catch(error)
    {
        return  res.status(500).json({message:"server error",error}) 
    }

    
}
//deleteadmin
const deleteAdmin=async(req,res)=>{
    const admin_id=req.params.admin_id;
    db.query(queries.deleteAdmin,[admin_id],(err,reulst)=>
    {
        if(err)
            {
                return  res.status(400).json({message:"error occurerd",error:err})
            }
            
               return res.status(200).json({message:"admin deleted successfully"}); 
                
            

    })
}

module.exports={
    getAdmin,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    loginAdmin
}