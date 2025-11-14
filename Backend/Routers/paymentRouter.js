import express from "express";
import { createOrder, verifyPayment } from "../Controllers/paymentController.js";
 
 

const paymentRouter = express.Router();

router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);

export default paymentRouter
