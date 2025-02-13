const getJob = "SELECT * FROM jobs";
const getJobById = "SELECT * FROM jobs WHERE job_id = $1";
const createJob="insert into jobs(admin_id,job_title,job_description,location,salary,skills,job_experience,work_type,job_status,total_application,total_vaccancy) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)";
// const updateJob="update jobs set admin_id=$1,job_title=$2,job_description=$3,location=$4,salary=$5,skills=$6,job_experience=$7,work_type=$8,job_status=$9,job_application=$10,job_vaccancy=$11 where job_id=$12";
const updateJob="update jobs set admin_id=COALESCE($1,admin_id),job_title=COALESCE($2,job_title),job_description=COALESCE($3,job_description),location=COALESCE($4,location),salary=COALESCE($5,salary),skills=COALESCE($6,skills),job_experience=COALESCE($7,job_experience),work_type=COALESCE($8,work_type),job_status=COALESCE($9,job_status),total_application=COALESCE($10,total_application),total_vaccancy=COALESCE($11,total_vaccancy) where job_id=$12";
const deleteJob = "DELETE FROM jobs WHERE job_id = $1";
const candidateByJobId="select * from candidates  where job_id=$1";
const jobStatus="SELECT * FROM jobs WHERE job_status = $1";



module.exports = {
    getJob,
    getJobById,
    createJob,
    updateJob,
    deleteJob,
    candidateByJobId,
    jobStatus
};


