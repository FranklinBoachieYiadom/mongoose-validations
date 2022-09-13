const {Schema, model} = require ("mongoose");

const userSchema = new Schema ({
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String ,
        default: false,
        lowercase: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minLength:[6, "Password is too Short."]
    },
},
{
    timestamp:true,
}

)

module.exports = model("user", userSchema);