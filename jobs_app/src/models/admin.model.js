// const getAdmin="select * from admins";
// const getAdminById="select * from admins where admin_id=$1";

// module.exports={
//     getAdmin,
//     getAdminById
// }

const getAdmin = "SELECT * FROM admins";
const getAdminById = "SELECT * FROM admins WHERE admin_id = $1";
const createAdmin="insert into admins(admin_name,email,phone,admin_status,role,password) values ($1,$2,$3,$4,$5,$6)";
// const updateAdmin="update admins set admin_name= $1,email =$2,phone=$3,admin_status=$4,role=$5,password=$6 where admin_id=$7";
const updateAdmin="update admins set admin_name=COALESCE($1,admin_name) ,email =COALESCE($2,email),phone=COALESCE($3,phone),admin_status=COALESCE($4,admin_status),role=COALESCE($5,role),password=COALESCE($6,password) where admin_id=$7";
const deleteAdmin = "DELETE FROM admins WHERE admin_id = $1";
const getAdminByEmail="SELECT * FROM admins WHERE email = $1"

module.exports = {
    getAdmin,
    getAdminById,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    getAdminByEmail
};



