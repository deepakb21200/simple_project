import mongoose, { Schema } from "mongoose";

let cartSchema = new Schema( {
         products:[
            {
                item :{ type : Schema.Types.ObjectId, ref : "Products" , required : true},
                price:{type : Number, required:true}, 
                qty : {type: Number, default :1},
                shipping: {type : Number , default : 0},
                      //my 
               image:{ type:String, required:true }
             
            }
        ],
        totalPrice :{type : Number, default:0},
        
        totalShipping:{type : Number,default:0},
    
        userId :{type : Schema.Types.ObjectId, ref: "Users" , required: true},
         shippingMethod: {
            type: String,        // "standard", "express", "free"
             required: true,
             default: "standard"
            },


          itemsAdded:{
            type:Number,
            default:0,
            required:true
        } , 

         
    },{timestamps: true}
)
let Cart = mongoose.model("cart" , cartSchema)

export default Cart