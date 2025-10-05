

import User from "../Models/UserSchema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import validator from "validator"
import cloudinary from "../config/Cloudinary.js"
import fs from "fs"
import dotenv from "dotenv"

dotenv.config()


export async function signup(req, res) {
    // let {firstName, lastName, userName, password, picture} = req.body
       let {firstName, lastName, userName, password} = req.body

    try {
        // if(!password){
        // return res.status(400).json({
        //     message:"Password not added!"
        // })
        // }

        if(!validator.isStrongPassword(password)){
            return res.status(400).json({
                message:"Password  must be strong (include uppercase, lowercase, number & special character"
            })
        }


        let pictureUrl =""

        if(req.file){
            let result = await cloudinary.uploader(req.file.path, {
                folder:"uploads"
            })

            pictureUrl = result.secure_url

            fs.unlink(req.file.path, (error)=>{
                console.log(error);
                
            })
        }

        let hashedPassoword = await bcrypt.hash(password, 10)

        let user = new User({
            firstName,
            lastName,
            userName,
            password:hashedPassoword,
            picture:pictureUrl
        })

        await user.save()
        res.status(201).json({message:"new user added"})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    
}





export async function login(req,res) {
    let {user} = req.body

    try {
        let token = jwt.sign({id:user._id}, process.env.secret_key, {expiresIn: "1d"})

        res.cookie("token", token, {
            secure:false //optionaal hai bydefulat secure false hi hota ha,
        }).json({
            message:"loggedin Successfully",
            isAdmin:false,
            user:{
                id:user._id,
                firstName:user.firstName,
                lastName:user.lastName,
                userName:user.userName
            }
        })
    } catch (error) {
        res.send(error)
        
    }
    
}



export async function getProfile(req, res){
    let token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"please login first to continue!"
        })
    }

    let decodedUser = jwt.verify(token, process.env.secret_key)

    let user = await User.findById(decodedUser.id).select("-password")

    if(!user){
      return  res.send("invalid token!")
    }

    res.status(200).json({user})
}



export async function logout(req, res) {
    try {
        res.clearCookie("token")

        res.status(200).json({message:"Logged out successfully"})
    } catch (error) {
        res.status(500).json({
            message:"Something went wrong", error: error.message
        })
    }
    
}