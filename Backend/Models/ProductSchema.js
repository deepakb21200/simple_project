import { model, Schema } from "mongoose";


let productSchema = new Schema({
    productName:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },

    productPrice:{
        type:Number,
        required:true,
        min:0
    },

    productImage:{
        type:[String],// yaha hum multtiple images allow kar rahe h
        required:true
    },
    

    productCount:{
        type:Number,
        required:true,
        min:0
    },

    productCategory:{
        type:String,
        required:true,
        enum:["Men", "Women", "Kids"]
    },

    description:{
        type:String,
        required:true
    }

},
{
    timestamps:true
})



let products = new model("Products", productSchema)


export default products