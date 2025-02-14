// const{Client}=require('pg');

// const db=new Client({

//     host:"localhost",
//     user:"postgres",
//     port:5432,
//     password:"12345",
//     database:"jobs"
// })
// const connectdb=async()=>
// {
//     db.connect()
//     .then(() => console.log("  connected successfully"))
//     .catch(err => console.error("  connection failed:", err));
// }

// connectdb();
// module.exports = db;



const{Client}=require('pg');
//dotenv is a Node.js package that loads environment variables from a .env file into process.env
require('dotenv').config();
//console.log(process.env.PASSWORD,process.env.USER,process.env.HOST,process.env.DATABASE,process.env.PORT);

// console.log("DB USER:", process.env.EMAIL_USER);
// console.log("DB PASSWORD:", process.env.EMAIL_PASS);

const db=new Client({
    host:process.env.HOST ,
    user:process.env.USER,
    port:process.env.PORT,
    password:process.env.PASSWORD ,
    database:process.env.DATABASE,
    ssl: { rejectUnauthorized: false } 
});
const connectdb=async()=>{
    db.connect()
    .then(()=> console.log("connected successfully"))
    .catch(err => console.error("connection failed :",err));
}
connectdb();
module.exports=db;
