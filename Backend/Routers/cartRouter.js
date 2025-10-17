 import { Router } from "express";
import { middle } from "../Middlewares/middle.js";
import { addToCart, clearCart, getCart, removeProductFromCart, updateCart } from "../Controllers/cartController.js";


 let cartRouter = Router()

 cartRouter.post("/add", middle, addToCart)

cartRouter.get("/get", middle, getCart)

cartRouter.post("/update", middle, updateCart)

cartRouter.post("/deletes",  middle,removeProductFromCart)

// ✅ New route to clear full cart
cartRouter.post("/clear", middle, clearCart);

 export default cartRouter


