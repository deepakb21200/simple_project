import { Router } from "express";
import { addProduct, getProduct } from "../Controllers/productController.js";
import upload, { handleMulterError } from "../Middlewares/multer.js";




let productRouter = Router()

productRouter.get("/", getProduct)
productRouter.post("/add-product", upload.array("image",2), handleMulterError, addProduct)



export default productRouter  