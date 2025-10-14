 import { Router } from "express";
import { middle } from "../Middlewares/middle.js";
import { addToCart, getCart, updateCart } from "../Controllers/cartController.js";


 let cartRouter = Router()

 cartRouter.post("/add", middle, addToCart)

cartRouter.get("/get", middle, getCart)

cartRouter.post("/update", middle, updateCart)

 export default cartRouter


