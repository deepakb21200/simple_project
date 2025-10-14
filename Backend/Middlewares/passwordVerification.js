import bcrypt from "bcrypt"
 
import User from "../Models/UserSchema.js"

 

export default async function password(req, res,next){
    let {userName, password} = req.body

    if(userName === process.env.admin_username){
        if(password !== process.env.admin_password){
            return res.status(401).json({
                message:"invalid admin password!",
                isAdmin:true
            })   
        }

        return res.status(202).json({
            message:"admin loggedin",
            isAdmin:true
        })
    }

    let user = await User.findOne({userName})

    if(!user){
        throw new Error("invalid credentials")
    }

    try {
        let hashedPassoword =user.password

        let isVerified = await bcrypt.compare(password, hashedPassoword)

        if(isVerified){
            req.body.user = user
            next()
        }
        else{
            throw new Error("invalid credentials")
        }
    } catch (error) {
        throw new Error(`server error ${error.message}`)
    }
}