const {Schema, model} = require ("mongoose");

const postSchema = new Schema ({
    title:{
        type: String,
        required: true,
    },
    body:{
        type: String,
        required: true,
    },
    published:{
        type: Boolean,
        default: false,
    },
    author:{
        type: Schema.Types.ObjectId,
        required: true,
    },
    likes:
        [{
            type: Schema.Types.ObjectId,
            ref:" User",
        },
    ], 
},
{
    timestamp:true,
}

)

module.exports = model("post", postSchema)