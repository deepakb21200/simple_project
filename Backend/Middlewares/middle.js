import User from "../Models/UserSchema.js"
import jwt from "jsonwebtoken"
export async function middle(req,res, next) {

    try {
        let token = req.cookies?.token

        if(!token) return res.status(401).json({error: "Not authenticated"})
        
        let decoded = jwt.verify(token, process.env.secret_key)

        let user = await User.findById(decoded.id)

        if(!user) return res.status(401).json({error: "User not found"})

        req.user = user
        next()

    } catch (error) {
        console.log("Auth error", error);


        res.status(401).json({error: "Invalid token"})
        
        
    }
    
}