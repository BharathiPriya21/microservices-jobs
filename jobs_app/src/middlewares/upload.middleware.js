
// const multer = require("multer");
// const storage = multer.memoryStorage();
//  const uploadPdf = multer({
//     storage: storage,
//     limits: {
//         fileSize: 5 * 1024 * 1024 
//     },
//     fileFilter: (req, file, cb) => {
//         if([ "application/pdf", "application/zip", "application/x-zip-compressed" ].includes(file.mimetype)){
//             cb(null, true)
//         }else{
//             cb(null, false)
//         }
//     }
// })
// module.export={uploadPdf}

const multer = require("multer");


const storage = multer.memoryStorage();

const uploadPdf = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, 
    fileFilter: (req, file, cb) => {
       
        if (["application/pdf", "application/zip", "application/x-zip-compressed"].includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error("Only PDF and ZIP files are allowed"), false); 
        }
    }
});

module.exports = uploadPdf;






