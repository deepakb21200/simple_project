import { Router } from "express"
import { addOrder, getOrder } from "../Controllers/orderController.js"
import { middle } from "../Middlewares/middle.js"




 const orderRouter= Router()

//  orderRouter.get("/getOrder", getOrder)
//  orderRouter.post("/addOrder", addOrder)

 orderRouter.get("/getOrder", middle ,getOrder)
 orderRouter.post("/addOrder", middle, addOrder)

 export default orderRouter