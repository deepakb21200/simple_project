 import { Router } from "express";
import { middle } from "../Middlewares/middle.js";
import { addToCart, getCart } from "../Controllers/cartController.js";


 let cardRouter = Router()

 cardRouter.get("/add", middle, addToCart)

 cardRouter.get("/get", middle, getCart)


 export default cardRouter


