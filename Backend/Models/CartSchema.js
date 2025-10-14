import mongoose, { Schema } from "mongoose";

let cartSchema = new Schema( {
         products:[
            {
                item :{ type : Schema.Types.ObjectId, ref : "Products" , required : true},
                price:{type : Number, required:true}, 
                qty : {type: Number, default :1},
                shipping: {type : Number , default : 0}
            }
        ],
        totalPrice :{type : Number, default:0},
        
        totalShipping:{type : Number,default:0},
    
         userId :{type : Schema.Types.ObjectId, ref: "Users" , required: true}
    },{timestamps: true}
)
let Cart = mongoose.model("cart" , cartSchema)

export default Cart