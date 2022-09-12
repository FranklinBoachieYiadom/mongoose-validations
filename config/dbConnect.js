const {connect} = require ("mongoose");


async function dbConnect(){
    try{
        await connect("mongodb://localhost:27017",{
            dbName:"shop",
        }),
        console.log("Database is connected Succesfully!")
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

module.exports ={dbConnect};