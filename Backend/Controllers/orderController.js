import jwt from "jsonwebtoken";
import Cart from "../Models/CartSchema.js";
import Order from "../Models/OrderSchema.js";
import Product from "../Models/ProductSchema.js";
import User from "../Models/UserSchema.js";

// export async function addOrder(req, res) {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ message: "Please login first" });

//     const decoded = jwt.verify(token, process.env.secret_key);

//     const { products, totalAmount } = req.body;

//     for (const item of products) {
//       const product = await Product.findById(item.productId);
//       if (!product) {
//         return res
//           .status(404)
//           .json({ message: `Product ${item.productId} not found` });
//       }

//       if (product.productCount < item.qty) {
//         return res.status(400).json({
//           message: `Insufficient stock for ${product.productName}. Available: ${product.productCount}, Requested: ${item.qty}`,
//         });
//       }

//       product.productCount -= item.qty;
//       await product.save();
//     }

//     const order = new Order({
//       userId: decoded.id,
//       products,
//       totalAmount,
//     });

//     await order.save();

//     await Cart.findOneAndDelete({ userId: decoded.id });

//     res.status(201).json({ message: "Order placed successfully", order });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// }

// export async function getOrder(req, res) {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.status(401).json({ message: "Please login first" });

//     const decoded = jwt.verify(token, process.env.secret_key);

//     const orders = await Order.find({ userId: decoded.id }).populate(
//       "products.productId"
//     );
//     res.status(200).json({ orders });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// }



export async function addOrder(req, res) {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Please login first" });

    const decoded = jwt.verify(token, process.env.secret_key);

    const { products, totalAmount , deliveryAddress} = req.body;

    if(!deliveryAddress){
      return res.status(400).json({message: "Delivery address is required"})
    }

    for (const item of products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res
          .status(404)
          .json({ message: `Product ${item.productId} not found` });
          //case admin panel me se product hi delete kar diya
      }

      if (product.productCount < item.qty) {
        return res.status(400).json({
          message: `Insufficient stock for ${product.productName}. Available: ${product.productCount}, Requested: ${item.qty}`,
        });
      }

      product.productCount -= item.qty;
      await product.save();
    }

    const order = new Order({
      userId: decoded.id,
      products,
      totalAmount,
      deliveryAddress
    });

    await order.save();

    await Cart.findOneAndDelete({ userId: decoded.id });

    await User.findByIdAndUpdate(decoded.id, { Cartvalue: 0 });//14 nov 2025

    res.status(201).json({ message: "Order placed successfully", order });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

export async function getOrder(req, res) {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Please login first" });

    const decoded = jwt.verify(token, process.env.secret_key)

    const orders = await Order.find({ userId: decoded.id }).populate(
      "products.productId"
    )

    res.status(200).json({ orders })
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}














//3.15 min





