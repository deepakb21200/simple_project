import { Router } from "express";
import { middle } from "../Middlewares/middle.js";
import { addAddress, deleteAddress, getAddresses, setDefaultAddress, updateAddress } from "../Controllers/addressController.js";



const addressRouter = Router()

addressRouter.get("/get", middle, getAddresses);
addressRouter.post("/add", middle, addAddress);
addressRouter.put("/update/:id", middle, updateAddress);
addressRouter.delete("/delete/:id", middle, deleteAddress);
addressRouter.patch("/setDefault/:id", middle, setDefaultAddress);

export default addressRouter;