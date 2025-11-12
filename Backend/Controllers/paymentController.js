import Razorpay from "razorpay"
import crypto from "crypto"


let razorpay = new Razorpay({
    key_id: process.env.RAJORPAY_KEY_ID,
    key_secret:process.env.RAJORPAY_KEY_SECRET
})


export let creatOrder = async (req, res)=>{
    try {
        let {amount} = req.body

        let options ={
            amount: amount*100,
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        }

        let order = await razorpay.orders.create(options)
        res.status(200).json(order)

    } catch (error) {
        console.log("Error creating order:", error)
        res.status(500).json({error: "Failed to create order"})
        
    }
}


export let verifyPayment = async (req, res)=>{
    
    try {
        let{razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body

        let body = razorpay_order_id + "|" + razorpay_payment_id
        let expectedSignature = crypto
        .createHmac("sha256", process.env.RAJORPAY_KEY_SECRET)
        .update(body.toString())
        .digest("hex")

        if(expectedSignature === razorpay_signature){
            res.status(200).json({success: true, message: "Payment verified successfully"})
        }else{
            res.status(400).json({success: false, message: "Invalid signature"})
        }

    } catch (error) {
        console.error("Error verifying payment:", error)
        res.status(500).json({error: "Verification failed"})
        
    }
}