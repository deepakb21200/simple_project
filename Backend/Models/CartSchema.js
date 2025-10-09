import mongoose, { Schema } from "mongoose";

let cartSchema = new Schema(
    {  
        totalPrice :{type : Number,default:0},
        totalShipping:{type : Number,default:0},
        products:[
            {
                item :{ type : Schema.Types.ObjectId,ref : "Product" , required : true},
                price:{type : Number,required:true}, 
                qty : {type: Number, default :1},
                shipping: {type : Number , default : 0}
            }
        ],
      
         userId :{type : Schema.Types.ObjectId, ref: "User" , required: true}
    },{timestamps: true}
)
let Cart = mongoose.model("cart" , cartSchema)

export default Cart