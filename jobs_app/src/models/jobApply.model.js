const getJobApply="select * from job_apply";
const getJobApplyById = "SELECT * FROM job_apply WHERE job_apply_id = $1";
const createJobApply ="insert into job_apply(candidate_id,job_id,candidate_name,email,phone,address,experience,school_name,college,cgpa,yop,resume_url,candidates_status) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)";
const updateJobApply="update job_apply set candidate_id=COALESCE($1,candidate_id), job_id=COALESCE($2,job_id),candidate_name=COALESCE($3,candidate_name),email=COALESCE($4,email),phone=COALESCE($5,phone),address=COALESCE($6,address),experience=COALESCE($7,experience),school_name=COALESCE($8,school_name),college=COALESCE($9,college),cgpa=COALESCE($10,cgpa),yop=COALESCE($11,yop),resume_url=COALESCE($12,resume_url),candidates_status=COALESCE($13,candidates_status) where job_apply_id=$14";
const deleteJobApply = "DELETE FROM job_apply WHERE job_apply_id = $1";
const candidateByJobId="select * from job_apply where job_id=$1 ";
//const AllCandidateWithJob="select jobApply.*,job.job_title,job.job_description,job.salary from job_apply jobApply LEFT JOIN jobs job ON jobApply.job_id=job.job_id where jobApply.job_id =$1"
//const AllCandidateWithJob="select c.*,job.job_title,job.job_description,job.salary from candidates c LEFT JOIN jobs job ON c.job_id=job.job_id where c.job_id =16"
const getAllCandidates="select * from candidates";
const getAllJobs="select job_id,job_title,job_description,salary from jobs"

const findByEmail="select job_id from job_apply where job_id = $1 AND email = $2";



module.exports = {
    getJobApply,
    getJobApplyById,
    createJobApply,
    updateJobApply,
    deleteJobApply,
    candidateByJobId,
    getAllCandidates,
    getAllJobs,
    findByEmail
   

};
