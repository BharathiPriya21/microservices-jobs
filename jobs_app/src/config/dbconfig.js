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



// const Pool=require('pg');
//dotenv is a Node.js package that loads environment variables from a .env file into process.env
// require('dotenv').config();
//console.log(process.env.PASSWORD,process.env.USER,process.env.HOST,process.env.DATABASE,process.env.PORT);

// console.log("DB USER:", process.env.EMAIL_USER);
// console.log("DB PASSWORD:", process.env.EMAIL_PASS);

// const db=new Client({
//     host:process.env.HOST ,
//     user:process.env.USER,
//     // port:process.env.PORT,
//     password:process.env.PASSWORD ,
//     database:process.env.DATABASE 
// });
// const connectdb=async()=>{
//     db.connect()
//     .then(()=> console.log("connected successfully"))
//     .catch(err => console.error("connection failed :",err));
// }
// connectdb();
const Pool = require("pg").Pool;
const pool = new Pool({

  connectionString:"postgresql://jobs_portal:scGBQkddHMyAHc6VPFYe5C382KzLuggg@dpg-cumt8gdsvqrc73fl1ip0-a.oregon-postgres.render.com/jobs_vl9f",
  //connectionString:'postgres://lte_db_render_sep_user:21zkOw98bM4G0RGcPxDkuFQDN0TCQG1l@dpg-ck5e4v0n715c73b6g2kg-a.singapore-postgres.render.com/lte_db_render_sep',
  ssl: { rejectUnauthorized: false },
});
pool.connect()
.then(()=> console.log("connected successfully"))
.catch(err => console.error("connection failed :",err));
module.exports=pool;

// const { Pool } = require('pg');  // ✅ Correct way to import Pool
// require('dotenv').config();

// const pool = new Pool({
//     host: process.env.HOST,
//     user: process.env.USER,
//     port: process.env.PORT,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     ssl: { rejectUnauthorized: false } // Required for Render
// });

// pool.connect()
//     .then(() => console.log("✅ Connected successfully to PostgreSQL"))
//     .catch(err => console.error("❌ Connection failed:", err));

// module.exports = pool;

