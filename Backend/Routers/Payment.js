import express from "express"

let router = express.Router()

router.post("create-order", createOrder)
router.post("/verify-payment", verifyPayment)


export default router