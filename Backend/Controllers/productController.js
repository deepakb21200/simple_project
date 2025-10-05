import cloudinary from "../config/Cloudinary";
import products from "../Models/ProductSchema";
import fs from "fs"



export async function getProduct(req,res) {
    try {
        let product = await products.find() // puri product collection

        res.json(product)

    } catch (error) {
        res.status(500).json({
            error:error
        })
        
    }
    
}


export async function addProduct(req, res) {    

    try {
        let imageUrl = []

        if(req.files){
            for (let file of req.files) {
                let result = await cloudinary.uploader.upload(file.path, {folder:"uploads"})
                imageUrl.push(result.secure_url)
                fs.unlinkSync(file.path)
            }
        }


        let newProduct = new products({
            productName: req.body.productName,
            productPrice: Number(req.body.productPrice),
            description:req.body.description,
            productCategory:req.body.productCategory,
            productImage:imageUrl,
            productCount: Number(req.body.productCount)
        })


        await newProduct.save()

        res.status(201).json(newProduct)
        
    } catch (error) {
        console.log("Product add error", err);
        res.status(400).json({
            error:error.message || "Failed to add Product"
        })
        
        
    }
    
}