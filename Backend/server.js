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
 
import paymentRouter from "./Routers/paymentRouter.js"
 
import router from "./Routers/Payment.js"
 
 
 
dotenv.config()
getConnection()
let port = process.env.PORT

let app = express()


// app.use(cors({
//     origin:"http://localhost:5173",
//     credentials:true // agar frontend se koi data aarha hoga  to hum usko allow kar rahe hai means frontend se data bhej bhi sakte hai  aur frontend me data le bhi sakti hu backend se aur by default ye chalta hai
// }))







// ✅ Proper CORS config: 2 nov 2025
// app.use(
//   cors({
//     origin: "http://localhost:5173", // frontend origin
//     credentials: true, // allow cookies
//     // methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//       methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );






// 11 nov 2025
app.use(
  cors({
    origin: "https://megamart-6wox.onrender.com",
    credentials: true, 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
     preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);







app.use(cookieParser())

app.use(express.json())


app.use("/user", userRouter)

app.use("/products", productRouter)

app.use("/cart", cartRouter)

app.use("/order", orderRouter)

app.use("/address", addressRouter)

app.use("/otp", otpRouter)
 
app.use("/payment", paymentRouter);
 
app.use("/payment", router)
 
app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
    
})







