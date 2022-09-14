const User = require ("./user.model");
const bcrypt = require ("bcryptjs");
const jwt = require ("jsonwebtoken");

const generateToken= (user)=>{
    const token = jwt.sign ({id: user._id, email: user.email}, 
        "574c03fb001f828a09c426851b8993d93abc4fface55b9651dd399c4af15e5b7",
        {
            expiresIn:"1h", 
        } 
        );
        return {
            token,
            user,
        };
}

exports.register = async (req,res)=>{
    const {email,password}= req.body;

    //checking to see if email already exist
    const emailExists = await User.findOne({email});
    if (emailExists){
        return res.status(400).json({error:"Email already in use."});
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({...req.body, password: hashedPassword});

    //generate token
    const token = generateToken(user);
    res.status(201).json({token})
};


exports.login =async (req,res)=>{
    const {email, password} =req.body;

    let user = await User.findOne({email});
    if(!user){
        return res.status(400).json({msg: "Invalid Credentials"})
    }

    const isMatch = await bcrypt.compare (password, user.password);
    if(!isMatch){
        return res.status(400).json({msg: "Invalid Credentials"}) 
    }
     //generate token
     const token = generateToken(user) 

    res.status(200).json({token});
};