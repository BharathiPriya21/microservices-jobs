const getCandidate = "SELECT * FROM candidates";
const getCandidateById = "SELECT * FROM candidates WHERE candidate_id = $1";
const createCandidate ="insert into candidates(job_id,candidate_name,email,phone,address,experience,school_name,college_name,cgpa,yop,resume_url,candidates_status) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)";
// const updateCandidate="update candidates set job_id=$1,candidate_name=$2,email=$3,phone=$4,address=$5,experience=$6,school=$7,college=$8,cgpa=$9,yop=$10,resume_url=$11,candidate_status=$12 where candidate_id=$13";
const updateCandidate="update candidates set job_id=COALESCE($1,job_id),candidate_name=COALESCE($2,candidate_name),email=COALESCE($3,email),phone=COALESCE($4,phone),address=COALESCE($5,address),experience=COALESCE($6,experience),school_name=COALESCE($7,school_name),college_name=COALESCE($8,college_name),cgpa=COALESCE($9,cgpa),yop=COALESCE($10,yop),resume_url=COALESCE($11,resume_url),candidates_status=COALESCE($12,candidates_status) where candidate_id=$13";
const deleteCandidate = "DELETE FROM candidates WHERE candidate_id = $1";
const candidateInterviewData="select c.*,i.* from candidates c LEFT JOIN interviews i ON c.candidate_id = i.candidate_id where c.candidate_id =$1";
const candidateStatus="SELECT * FROM candidates WHERE candidates_status=$1";


module.exports = {
    getCandidate,
    getCandidateById,
    createCandidate,
    updateCandidate,
    deleteCandidate,
    candidateInterviewData,
    candidateStatus


};

