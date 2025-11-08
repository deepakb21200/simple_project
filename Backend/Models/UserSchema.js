import { model, Schema } from "mongoose";


let UserSchema = new Schema({
    firstName:{
        type:String,
        required:[true, "name is required"]//means agar ye  nhi hua to ye vaala error aajaye
    },

    lastName:{
        type:String
    },

    userName:{
        type:String,
        unique:[true, "username already taken!"],
        required:[true, "username is required!"]
    },

    password:{
        type:String,
        required:[true, "Please enter a password!"],
        minLength:[9, "Password must be at least 9 characters long!"]
    },

    picture:{
        type:String
    },
    Cartvalue:{
    type:Number,
    default:0,
    required:true
   }


})



let User = model("Users", UserSchema)

export default User