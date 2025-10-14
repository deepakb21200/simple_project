import { Router } from "express";
import { getProfile, login, logout, signup, updateProfile } from "../Controllers/userController.js";
import upload, { handleMulterError } from "../Middlewares/multer.js";
import password from "../Middlewares/passwordVerification.js";
 




let userRouter= Router()

userRouter.post("/signup", upload.single("picture") , handleMulterError,signup)
userRouter.post("/login", password, login)
userRouter.get("/getProfile", getProfile)
userRouter.post("/logout", logout)
userRouter.put("/updateProfile", upload.single("picture"), handleMulterError, updateProfile);


  export default userRouter

 