import { Router } from "express";
 
import { middle } from "../Middlewares/middle.js";
import { sendOtp, verifyOtp } from "../Controllers/otpController.js";

const otpRouter = Router();

otpRouter.post("/send", middle, sendOtp);
otpRouter.post("/verify", middle, verifyOtp);

export default otpRouter;
