import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
         //my 
               image:{ type:String, required:true }
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum:["pending", "shipped", "cancelled", "delivered"], default: "Pending" }, 

  toBeDeliveredBy:{
    type:String
  }

}, {
  timestamps:true
});

const Order = model("Orders", OrderSchema);

export default Order;
