import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import getConnection from "./Database/db.js"
import cartRouter from "./Routers/cartRouter.js"
import userRouter from "./Routers/userRouter.js"
import productRouter from "./Routers/productRouter.js"
import addressRouter from "./Routers/addressRouter.js"
import orderRouter from "./Routers/orderRouter.js"
import otpRouter from "./Routers/otpRouter.js"
 
 
dotenv.config()
getConnection()
let port = process.env.PORT

let app = express()


app.use(cors({
    origin:"http://localhost:5173",
    credentials:true // agar frontend se koi data aarha hoga  to hum usko allow kar rahe hai means frontend se data bhej bhi sakte hai  aur frontend me data le bhi sakti hu backend se aur by default ye chalta hai
}))

app.use(cookieParser())

app.use(express.json())


app.use("/user", userRouter)

app.use("/products", productRouter)

app.use("/cart", cartRouter)

app.use("/order", orderRouter)

app.use("/address", addressRouter)

app.use("/otp", otpRouter)

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
    
})







