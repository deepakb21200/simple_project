import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import getConnection from "./Database/db.js"
import userRouter from "./Routers/userRouter.js"

dotenv.config()
getConnection()
let port = process.env.port

let app = express()


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true // agar frontend se koi data aarha hoga  to hum usko allow kar rahe hai means frontend se data bhej bhi sakte hai  aur frontend me data le bhi sakti hu backend se aur by default ye chalta hai
}))

app.use(cookieParser())

app.use(express.json())


app.use("/user", userRouter)
// app.use("/products", productRouter)




app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
    
})







