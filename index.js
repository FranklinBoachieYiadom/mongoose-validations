const express =require ("express");
const {dbConnect}= require ("./config/dbConnect");
const postRouter = require("./modules/post/post.route")
const {authRouter} = require ("./modules/users/auth.route")

const app = express ();
app.use(express.json())


app.get("/",(req,res)=>{
    res.status(4000).send("App is mounted Sucessfully")
})
app.use("/auth", authRouter);
app.use("/posts",postRouter);


async function start(){
 await dbConnect();

app.listen(4000,(err)=>{
    console.log("Server is running on localhost 4000");
})
}
start();