import { Router } from "express";
import { middle } from "../Middlewares/middle.js";
import { addAddress, getAddresses } from "../Controllers/addressController.js";



const addressRouter = Router()

addressRouter.get("/get", middle, getAddresses);
addressRouter.post("/add", middle, addAddress);


export default addressRouter;