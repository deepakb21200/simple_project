import mongoose from "mongoose";
import Cart from "../Models/CartSchema.js"
import Product from "../Models/ProductSchema.js";
import User from "../Models/UserSchema.js";

// export async function addToCart(req,res) {
//     let userId = req.user?._id

//     let {productId, price, shipping} = req.body


//      console.log("addToCart - userId:", userId);
//   console.log("addToCart - req.user:", req.user);
//   console.log("addToCart - productId:", productId);


//     if(!userId || !productId){//matlab dono me se ek bhi na ho
//         return res.status(400).json({error: "Missing userId or productId", userId, productId})
//     }
    

//     try {
//         let cart = await Cart.findOne({userId})

//         if(!cart){
//             cart = new Cart({
//                 userId,
//                 products:[],
//                 totalPrice :0,
//                 totalShipping:0
//             })
//         }

//         let existingProduct = cart.products.find(
//             (p)=>p.item.toString() === productId
//         )


//         if(existingProduct){
//             existingProduct = existingProduct.qty + 1

//         }else{
//             cart.products.push({
//                 item:productId,
//                 price,
//                 shipping,
//                 qty:1
//             })
//         }


//         cart.totalPrice = cart.products.reduce((sum,p) =>sum + p.price * p.qty, 0)

//         cart.totalShipping = cart.products.reduce((sum,p) =>sum + p.shipping, 0)

//         await cart.save()

//         res.status(200).json({message:"Product added to cart", cart})

        
//     } catch (error) {
//         console.error(error)
//         res.status(500).json({error:"Server Error"})
  
//     }
// }



// export const getCart = async (req, res) => {
//   try {
//     const userId = req.user?._id;
//     if (!userId) return res.status(401).json({ error: "Not logged in" });

//     let cart = await Cart.findOne({ userId }).populate("products.item");
//     console.log(cart);
    
//     if (!cart)
//        cart = {
//           userId,
//           products: [], 
//           totalPrice: 0, 
//           totalShipping: 0 
//         };

//     else {
//         cart = cart.toObject();
//     }

//     res.status(200).json({ cart });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch cart" });
//   }
// };


// export const updateCart = async (req, res) => {
//   const userId = req.user?._id;
//   const { productId, action } = req.body;

//   if (!userId || !productId || !action) {
//     return res.status(400).json({ error: "Missing fields" });
//   }

//   try {
//     const cart = await Cart.findOne({ userId });
//     if (!cart) return res.status(404).json({ error: "Cart not found" });

//     const productInCart = cart.products.find(p => p.item.toString() === productId);
//     if (!productInCart) return res.status(404).json({ error: "Product not in cart" });

//     const productDoc = await Product.findById(productId);
//     if (!productDoc) return res.status(404).json({ error: "Product not found" });

//     const stock = productDoc.productCount ?? 0;

//     if (action === "inc") {
    
//       if (stock<=0) {
//         return res.status(400).json({ error: "Stock limit reached" });
//       }
//       productInCart.qty += 1;
//       productDoc.productCount -= 1;
//     } else if (action === "dec") {
//       productInCart.qty -= 1;
//       productDoc.productCount += 1;


//       if (productInCart.qty <= 0) {
//         cart.products = cart.products.filter(p => p.item.toString() !== productId);
//       }
//     } else {
//       return res.status(400).json({ error: "Invalid action" });
//     }

//     cart.totalPrice = cart.products.reduce((sum, p) => sum + p.price * p.qty, 0);
//     cart.totalShipping = cart.products.reduce((sum, p) => sum + p.shipping, 0);


//     await cart.save();
//     await productDoc.save();

//     const updatedCart = await Cart.findOne({ userId }).populate("products.item");

//     res.status(200).json({
//       message: "Cart updated successfully",
//       cart: updatedCart
//     });
//   } catch (err) {
//     console.error("❌ Error in updateCart:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// }; //ye manish ka hai

 



// 13 oct 2025


export const addToCart = async (req, res) => {
  const userId = req.user?._id;
  const { productId, price, shipping ,image} = req.body;

  console.log("addToCart - userId:", userId);
  console.log("addToCart - req.user:", req.user);
  console.log("addToCart - productId:", productId);

  if (!userId || !productId) {
    return res
      .status(400)
      .json({ error: "Missing userId or productId", userId, productId });
  }

  try {
    const productDoc = await Product.findById(productId);
    if (!productDoc) {
      return res.status(404).json({ error: "Product not found" });
    }

    if (productDoc.productCount <= 0) {
      return res.status(400).json({ error: "Product is out of stock" });
    }

    let cart = await Cart.findOne({ userId });
    
    if (!cart) {
      cart = new Cart({
        userId,
        products: [],
        totalPrice: 0,
        totalShipping: 0,
        //my
       
      });
    }

    const existingProduct = cart.products.find(
      (p) => p.item.toString() === productId
    );

    if (existingProduct) {
      if (existingProduct.qty + 1 > productDoc.productCount) {
        return res
          .status(400)
          .json({ error: "Not enough stock available to add more" });
      }
      existingProduct.qty += 1;
    } else {
      cart.products.push({
        item: productId,
        price,
        shipping,
        qty: 1,
         image
      });
    }

    cart.totalPrice = cart.products.reduce(
      (sum, p) => sum + p.price * p.qty,
      0
    );
    cart.totalShipping = cart.products.reduce((sum, p) => sum + p.shipping, 0);

    await cart.save();

    res.status(200).json({ message: "Product added to cart", cart });
  } catch (err) {
    console.error("❌ Error in addToCart:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const getCart = async (req, res) => {
  try {
    const userId = req.user?._id;
    if (!userId) return res.status(401).json({ error: "Not logged in" });

    let cart = await Cart.findOne({ userId }).populate("products.item");
    // populate - > id ??? - document

    // products

    // console.log(cart);

    if (!cart) cart = { userId, products: [], totalPrice: 0, totalShipping: 0 };
    else cart = cart.toObject();

    res.status(200).json({ cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch cart" });
  }
};

export const updateCart = async (req, res) => {
  const userId = req.user?._id;
  const { productId, action } = req.body;

  if (!userId || !productId || !action) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ error: "Cart not found" });

    const productInCart = cart.products.find(
      (p) => p.item.toString() === productId
    );
    if (!productInCart)
      return res.status(404).json({ error: "Product not in cart" });

    const productDoc = await Product.findById(productId);
    if (!productDoc)
      return res.status(404).json({ error: "Product not found" });

    const stock = productDoc.productCount ?? 0;

    if (action === "inc") {
      if (productInCart.qty + 1 > stock) {
        return res.status(400).json({ error: "Stock limit reached" });
      }
      productInCart.qty += 1;
    } else if (action === "dec") {
      productInCart.qty -= 1;

      if (productInCart.qty <= 0) {
        cart.products = cart.products.filter(
          (p) => p.item.toString() !== productId
        );
      }
    } else {
      return res.status(400).json({ error: "Invalid action" });
    }

    cart.totalPrice = cart.products.reduce(
      (sum, p) => sum + p.price * p.qty,
      0
    );
    cart.totalShipping = cart.products.reduce((sum, p) => sum + p.shipping, 0);

    await cart.save();

    const updatedCart = await Cart.findOne({ userId }).populate(
      "products.item"
    );

    res.status(200).json({
      message: "Cart updated successfully",
      cart: updatedCart,
    });
  } catch (err) {
    console.error("❌ Error in updateCart:", err);
    res.status(500).json({ error: "Server error" });
  }
};











 

// export const removeProductFromCart = async (req, res) => {
//   try {
//      const userId = req.userId;           // Logged-in user
//     const productId = req.body.productId; // Product to remove

//     const result = await Cart.updateOne(
//       { userId },
//       { $pull: { products: { item: productId } } } // Remove product from array
//     );

//     if (result.modifiedCount > 0) {
//       res.json({ message: "Product removed successfully" });
//     } else {
//       res.status(404).json({ message: "Product not found in cart" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: "Error removing product", error });
//   }
// };





 

export const removeProductFromCart = async (req, res) => {
  try {
    const userId = req.user._id;  // middleware se
   //  const productId = mongoose.Types.ObjectId(req.body.productId); // ObjectId convert

const productId = new mongoose.Types.ObjectId(req.body.productId); // ✅ sahi

    const result = await Cart.updateOne( 
      { userId },
      { $pull: { products: { item: productId } } }
    );

    if (result.modifiedCount > 0) {
      res.json({ message: "Product removed successfully" });
    } else {
      res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error removing product", error });
  }
};
// let b = await User.findByIdAndDelete(req.body.productId, {new:true})








export const clearCart = async (req, res) => {
  try {
    const userId = req.user._id; // from middleware

    const result = await Cart.updateOne(
      { userId },
      { $set: { products: [] } }
    );

    if (result.modifiedCount > 0) {
      res.json({ message: "Cart cleared successfully" });
    } else {
      res.status(404).json({ message: "No cart found for this user" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error clearing cart", error });
  }
};





