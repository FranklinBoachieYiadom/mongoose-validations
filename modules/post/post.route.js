const router = require ("express").Router;

const{
    createPost,deletePost,getPosts,getPost,updatePost
} = require ("./post.controller");
const {authRequired}= require ("../middlewares/authRequired")

const postRouter = router();

postRouter.route("/").get(getPosts).post(createPost);
postRouter
.route("/:postId")
.all(authRequired)
.get(getPost)
.patch(updatePost)
.delete(deletePost);


module.exports = postRouter;