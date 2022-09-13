const Post = require ("./post.model")

exports.getPosts = async (req,res)=>{
    const posts = await Post.find({});
    res.status(200).json({posts});
}

exports.getPost = (req,res)=>{
    res.status(200).send("Gets a single Post")
}
exports.createPost =async (req,res)=>{
    const post = await Post.create({
        title: req.body.title,
        body: req.body.body,
        published: req.body.published,
    });
    res.status(201).send({post})
};

exports.getPost = async (req,res)=>{
    // const postId = req.params.postId;
    const {postId} = req.params;
    const post = await Post.findById(postId);
    res.status(200).json({post});
}


exports.updatePost=async (req,res)=>{
    const {postId} = req.params;
    const post = await Post.findByIdAndUpdate(postId,{...req.body},{new:true});
    res.status(200).json({post});
}

exports.deletePost= async(req,res)=>{
    const {postId} = req.params;
    const post = await Post.findByIdAndDelete(postId,);
    res.status(200).json({msg:"Post Succesfully deleted."});
}

