// const multer = require("multer");
// const path = require("path");
// const fs = require("fs");


// const uploadDir = "uploads/";
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir);
// }

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/"); 
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });

// const upload = multer({ storage });

// module.exports = upload;

// const multer = require("multer");
// const path = require("path");

// // Ensure "uploads" folder exists
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     },
// });

// // Configure multer
// const upload = multer({ storage });

// module.exports = upload;

const multer = require("multer");
const storage = multer.memoryStorage();
 const uploadPdf = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5mb
    },
    fileFilter: (req, file, cb) => {
        if([ "application/pdf", "application/zip", "application/x-zip-compressed" ].includes(file.mimetype)){
            cb(null, true)
        }else{
            cb(null, false)
        }
    }
})
module.export={uploadPdf}





