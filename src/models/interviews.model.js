const getInterview = "SELECT * FROM interviews";
const getInterviewById = "SELECT * FROM interviews WHERE interview_id = $1";
const createInterview="insert into interviews(candidate_id,interview_date,interview_status,feedback) values ($1,$2,$3,$4)";
// const updateInterview="update interviews set candidate_id=$1,interview_date=$2,interview_status=$3,feedback=$4 where interview_id=$5";
const updateInterview="update interviews set candidate_id=COALESCE($1,candidate_id),interview_date=COALESCE($2,interview_date),interview_status=COALESCE($3,interview_status),feedback=COALESCE($4,feedback) where interview_id=$5";
const deleteInterview = "DELETE FROM interviews WHERE interview_id = $1";

module.exports = {
    getInterview,
    getInterviewById,
    createInterview,
    updateInterview,
    deleteInterview
};
