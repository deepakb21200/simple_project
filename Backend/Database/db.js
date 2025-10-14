import mongoose from "mongoose"
 

 

export default async function getConnection() {  
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected")
    }
    catch(err){
        console.log("connection failed due to :-", err);
    }
 }
