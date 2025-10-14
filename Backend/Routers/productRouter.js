import { Router } from "express";

import upload, { handleMulterError } from "../Middlewares/multer.js";
import { addProduct, deleteProduct, getProduct, updateProduct } from "../Controllers/productController.js";


let productRouter = Router()

productRouter.get("/", getProduct)

productRouter.post("/add-product", upload.array("image",2), handleMulterError, addProduct)

productRouter.patch("/update-product/:id", upload.array("image", 2), handleMulterError, updateProduct)

// productRouter.patch("/update-product/:id", updateProduct);

productRouter.delete("/delete-product/:id", deleteProduct)


export default productRouter  


 