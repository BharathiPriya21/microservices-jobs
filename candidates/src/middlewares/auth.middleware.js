
//import jsonwebtoken pck ,used to create and verfiy the json webtoken 
//used to implement authentication and authorization
const jwt =require('jsonwebtoken');
// middle ware function for authorization with 3 parameter req(incoming request),res(sen the res back),next(callback func(move the request to the next middleware or route))
 const authMiddleware=(req,res,next)=>
 {
    const token=req.header('authorization');

    //if there is no token,the middleware return a 400
    if(!token)
    {
        return res.status(400).json({message:"access rejected no token provided ."})
    }
    try{
        //jwt.verify() func decode and verify the token using the secret key
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        // it will decode the user info is assigned to req.admin ,it allows the next middleware to access the admin details
        req.admin=decoded;
        //if verification is success the request move to next route handler or middlwware
        next();
    }
    //if verification fails it catches the error
    catch(error)
    {
        return res.status(400).json({message:"invalid token"})
    }
}
module.exports=authMiddleware;