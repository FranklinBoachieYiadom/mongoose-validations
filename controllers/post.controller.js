const Post = require ("../models/post.model")

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
        published:req.body.published,
    });
    res.status(201).send({post})
}
exports.updatePost=(req,res)=>{
    res.status(200).send("Updates a Post")
}

exports.deletePost=(req,res)=>{
    res.status(200).send("Delete a single Post")
}
