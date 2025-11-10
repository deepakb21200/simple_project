
import cloudinary from "../config/Cloudinary.js";
import fs from "fs"
import Product from "../Models/ProductSchema.js";
import Cart from "../Models/CartSchema.js";
 




// export async function getProduct(req,res) {
//     try {
//         let product = await products.find() // puri product collection

//         res.json(product)

//     } catch (error) {
//         res.status(500).json({
//             error:error
//         })
        
//     }
    
// }


// export async function addProduct(req, res) {    

//     try {
//         let imageUrl = []

//         if(req.files){
//             for (let file of req.files) {
//                 let result = await cloudinary.uploader.upload(file.path, {folder:"uploads"})
//                 imageUrl.push(result.secure_url)
//                 fs.unlinkSync(file.path)
//             }
//         }


//         let newProduct = new products({
//             productName: req.body.productName,
//             productPrice: Number(req.body.productPrice),
//             description:req.body.description,
//             productCategory:req.body.productCategory,
//             productImage:imageUrl,
//             productCount: Number(req.body.productCount)
//         })


//         await newProduct.save()

//         res.status(201).json(newProduct)
        
//     } catch (error) {
//         console.log("Product add error", err);
//         res.status(400).json({
//             error:error.message || "Failed to add Product"
//         })
        
        
//     }
    
// }



// 13 oct 2025    
 




// Get all products
export async function getProduct(req, res) {
  try {
 
    
    const product = await Product.find();
    // console.log(product);
    

    res.status(200).json({
      message: "Products found",
      products: product,
    });
  } catch (error) {
    console.log("errrss");
    
    
    res.status(500).json({ error });
      // res.status(500).json({ error:{error, hi:"deepak"} });
  }
}

// Add new product
export async function addProduct(req, res) {
  // console.log(req.files);

  try {
    let imageUrl = [];
    if (req.files) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, { folder: "uploads" });
        imageUrl.push(result.secure_url);
        fs.unlinkSync(file.path);
      }
    }

    const newProduct = new Product({
      productName: req.body.productName,
      productPrice: Number(req.body.productPrice),
      description: req.body.description,
      productCategory: req.body.productCategory,
      productImage: imageUrl,
      productCount: Number(req.body.productCount),
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    console.log("Product add error:", err);
    res.status(400).json({ error: err.message || "Failed to add product" });
  }
}
// import { addProduct, deleteProduct, getProduct, updateProduct } from "../Controllers/productController.js";
// Update product
export async function updateProduct(req, res) {
  try {
    const { id } = req.params;
    // const updatedData = req.body;

    let updatedData = { ...req.body };

// convert string → number (important for Mongoose)
if (updatedData.productPrice) updatedData.productPrice = Number(updatedData.productPrice);
if (updatedData.productCount) updatedData.productCount = Number(updatedData.productCount);


    const existingProduct = await Product.findById(id);
        // const existingProduct = await Product.find({id});
    if (!existingProduct) return res.status(404).json({ message: "Product not found" });

    if (updatedData.productCount != null) {
      const totalInCarts = await Cart.aggregate([
        { $unwind: "$products" },
        { $match: { "products.item": existingProduct._id } },
        { $group: { _id: null, totalQty: { $sum: "$products.qty" } } }
      ]);
      const minCount = totalInCarts[0]?.totalQty || 0;

      if (updatedData.productCount < minCount) {
        return res.status(400).json({ 
          error: `Cannot reduce stock below ${minCount} (already in users' carts)` 
        });
      }
    }

    if (req.files && req.files.length > 0) {
      let imageUrl = [];
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(file.path, { folder: "uploads" });
        imageUrl.push(result.secure_url);
        fs.unlinkSync(file.path);
      }
      updatedData.productImage = imageUrl;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      updatedData,
      { new: true }
    );

    res.status(200).json(updatedProduct);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update product" });
  }
}

// Delete product
export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    // Check if product exists in any cart
    const inCarts = await Cart.find({ "products.item": id });
    if (inCarts.length > 0) {
      return res.status(400).json({ error: "Cannot delete product, it's in users' carts" });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete product" });
  }
}
