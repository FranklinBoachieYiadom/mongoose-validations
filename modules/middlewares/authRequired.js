const jwt = require ("jsonwebtoken")

exports.authRequired = (req, res, next) =>{
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.status(402).json({error: "please login"});
    }
    const token = authorization.split (" ")[1]
    if(!token){
        return res.status(402).json({error:"Please login"});
    }

    const user= jwt.verify(token,"574c03fb001f828a09c426851b8993d93abc4fface55b9651dd399c4af15e5b7");

    req.user = user;
    next();
};