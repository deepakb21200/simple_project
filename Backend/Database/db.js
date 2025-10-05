import mongoose from "mongoose"
import dotenv from "dotenv";

 

dotenv.config()

 

export default async function getConnection() {  
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected")
    }
    catch(err){
        console.log("connection failed due to :-", err);
    }
 }
