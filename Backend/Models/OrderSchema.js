import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Products", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: "Pending" }, 

}, {
  timestamps:true
});

const Order = model("Orders", OrderSchema);

export default Order;
