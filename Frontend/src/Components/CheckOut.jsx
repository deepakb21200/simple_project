// ye hai original 

// import React, { useContext } from 'react'
// import UserCreditentials from './UserCreditentials'
// import ShippingForm from './ShippingForm'
// import Payment from './Payment'
// import ReviewOrder from './ReviewOrder'
// import PlaceOrder from './PlaceOrder'
// import { CheckoutContext } from '../Context_Order/ContextOrder'
 

// function CheckOut() {
//    const { state, dispatch } = useContext(CheckoutContext); 
//   const { step } = state;
//     const nextStep = () => dispatch({ type: "NEXT_STEP" });
//   const prevStep = () => dispatch({ type: "PREV_STEP" });
//   return (
//     <>
//     <div className=' py-10 px-4 flex justify-center flex-1 gap-4 bg-white border '>

 
 
// <div className='   w-[800px]'>
 

//     <div className="relative flex items-center justify-between w-full px-4 py-1  overflow-hidden 
//    ">
//   {/* Background line */}
//  <div className="absolute top-1/2 left-5 right-5 h-1 bg-gray-300 rounded transform -translate-y-1/2
//   "></div> 

//   {/* Progress line */}
//   <div
//     className="absolute top-1/2 h-1 bg-purple-800 rounded transform -translate-y-1/2 transition-all duration-500"
//     style={{
//       left: '1.25rem', // 5px = 1.25rem padding from left
//       // width: `calc(((100% - 2.5rem) / 3) * ${step - 1})`, 
//        width: `calc(((100% - 2.5rem) / 3) * ${Math.min(step - 1, 3)})`,
//     }}
//   ></div>

//   {/* Step circles */}
  


//   {[1, 2, 3, 4].map((s) => (
//      <div key={s} className="flex flex-col items-center z-10  ">
//       <div  className={`w-10 h-10 flex items-center justify-center rounded-full 
//       font-semibold transition-colors duration-500  relative  ${
//           step > s ? 'bg-purple-800 text-white '
//             : step === s
//             ? 'bg-purple-800 text-white'
//             : 'border-2 border-gray-300 text-gray-400 bg-white'
//         }`}>

//         {step > s ? '✓' : s}
//       </div>
     
//     </div>
//   ))}


//  {/* <p className={`text-sm mt-1 ${step >= s ? 'text-purple-900' : 'text-gray-400'}`}>
//         {s === 1
//           ? 'Information'
//           : s === 2
//           ? 'Shipping'
//           : s === 3
//           ? 'Payment'
//           : 'Review'}
//       </p> */}


  
// </div>




//       {/* Current Form */}
//       {step === 1 && <UserCreditentials nextStep={nextStep} />}
//       {step === 2 && <ShippingForm nextStep={nextStep} prevStep={prevStep} />}
//       {step === 3 && <Payment nextStep={nextStep} prevStep={prevStep} />}
//       {step === 4 && <ReviewOrder nextStep={nextStep} prevStep={prevStep} />}
//       {step === 5 && <PlaceOrder nextStep={nextStep} prevStep={prevStep}/>}

// </div>
 
    
         

//      <div className=" bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
//           <h2 className="text-xl font-bold mb-6 text-gray-800">
//             Order Summary
//           </h2>

//           <div className="space-y-4 text-sm  ">
//             <div className="flex justify-between font-bold text-xl text-gray-800 ">
//               <span>Subtotal</span>
//               <span>₹{40000}</span>
//             </div>
//             <div className="flex justify-between font-bold text-xl text-gray-800 ">
//               <span>Shipping</span>
//               <span>₹99</span>
//             </div>

        
//             <div className="flex justify-between text-lg font-semibold">
//               <span>Tax</span>
//               <span>$27.00</span>
//             </div>

//             <div className="flex justify-between text-lg font-semibold">
//               <span>Discount</span>
//               <span>-$0.00</span>
//             </div>
//           </div>

//           <hr className="my-5" />

//           <div className="flex justify-between text-lg font-semibold text-gray-800">
//             <span>Total</span>
//             <span>$301.95</span>
//           </div>

//           <button className="w-full mt-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition">
//             Proceed to Checkout →
//           </button>

//           <button className="w-full mt-3 text-pink-600 hover:underline  ">
//             Continue Shopping
//           </button>

//           <div className="mt-6 text-center text-gray-500 text-sm">
//             <p>We Accept</p>
//             <div className="flex justify-center gap-4 mt-2 text-xl">💳 🏦 💰</div>
//           </div>
//         </div>

 

//       </div>
//     </>
//   )
// }

// export default CheckOut



//   <div className="w-full lg:w-1/3 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
//           <h2 className="text-xl font-bold mb-6 text-gray-800">
//             Order Summary
//           </h2>

//           <div className="space-y-4 text-sm  ">
//             <div className="flex justify-between font-bold text-xl text-gray-800 ">
//               <span>Subtotal</span>
//               <span>₹{cart.totalPrice}</span>
//             </div>

//             <div className="font-semibold text-md">
//               <p className="mb-2 text-lg">Shipping</p>
//               <div className="space-y-2 pl-1">
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="ship" defaultChecked />
//                   <span>Standard Delivery – ₹99</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="ship" />
//                   <span>Express Delivery – ₹249</span>
//                 </label>
//                 <label className="flex items-center gap-2">
//                   <input type="radio" name="ship" />
//                   <span>Free Shipping (Orders over ₹3000)</span>
//                 </label>
//               </div>
//             </div>

//             <div className="flex justify-between text-lg font-semibold">
//               <span>Tax</span>
//               <span>$27.00</span>
//             </div>

//             <div className="flex justify-between text-lg font-semibold">
//               <span>Discount</span>
//               <span>-$0.00</span>
//             </div>
//           </div>

//           <hr className="my-5" />

//           <div className="flex justify-between text-lg font-semibold text-gray-800">
//             <span>Total</span>
//             <span>$301.95</span>
//           </div>

//           <button className="w-full mt-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition">
//             Proceed to Checkout →
//           </button>

//           <button className="w-full mt-3 text-pink-600 hover:underline text-sm">
//             Continue Shopping
//           </button>

//           <div className="mt-6 text-center text-gray-500 text-sm">
//             <p>We Accept</p>
//             <div className="flex justify-center gap-4 mt-2 text-xl">💳 🏦 💰</div>
//           </div>
//         </div>








import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, selectedAddress } = location.state || {};

  const [paymentMode, setPaymentMode] = useState("");
  const [loading, setLoading] = useState(false);

  const customerNumber = Math.floor(Math.random() * 1000000000);

  if (!cart || !selectedAddress) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>⚠️ Error: Missing cart or address data.</p>;
  }

  
  const handlePlaceOrder = async () => {
  if (!paymentMode) {
    alert("Please select a payment mode.");
    return;
  }

  setLoading(true);

  try {
    // ⭐ ONLINE FLOW
    if (paymentMode === "online") {
      const res = await fetch("https://e-com-project-msn4.onrender.com/payment/create_order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          totalAmount: cart.totalPrice + cart.totalShipping,
        }),
      });

      const data = await res.json();
      const order = data.order;

      const options = {
        key: "rzp_test_Rf7yXnYt9LROEk",
        amount: order.amount,
        currency: order.currency,
        name: "E-Bajar",
        order_id: order.id,

        handler: async function (response) {
          const verifyRes = await fetch("https://e-com-project-msn4.onrender.com/payment/verify_payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            }),
          });

          const verifyData = await verifyRes.json();

          if (verifyData.success) {
            await placeFinalOrder("online");
          } else {
            alert("Payment Verification Failed!");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
      return;
    }

    // ⭐ COD FLOW
    if (paymentMode === "cod") {
      await placeFinalOrder("cod");
      return;
    }

  } catch (error) {
    console.error(error);
    alert("Something went wrong!");
  } finally {
    setLoading(false);
  }
};


 const placeFinalOrder = async (mode) => {
  const products = cart.products.map((p) => ({
    productId: p.item._id,
    quantity: p.qty,
    price: p.price,
  }));

  const res = await fetch("https://e-com-project-msn4.onrender.com/order/addOrder", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      products,
      totalAmount: cart.totalPrice + cart.totalShipping,
      deliveryAddress: selectedAddress,
      paymentMode: mode,        // online or cod
      customerNumber: customerNumber.toString(),
    }),
  });

  const data = await res.json();

  if (res.ok) {
    alert("Order Placed Successfully!");
    navigate("/orders");
  } else {
    alert(data.message || "Failed to place order");
  }
};


  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "700px",
        margin: "40px auto",
        borderRadius: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>🛒 Checkout</h2>


      <section >
        <h3 >Delivery Address</h3>
        <p><strong>{selectedAddress.fullName}</strong></p>
        <p>{selectedAddress.phone}</p>
        {/* <p>
          {selectedAddress.addressLine1}
          {selectedAddress.addressLine2 ?  {selectedAddress.addressLine2} : ""}
        </p> */}

         {selectedAddress.addressLine2 ? `, ${selectedAddress.addressLine2}` : ""}
        <p>{selectedAddress.city}, {selectedAddress.state} - {selectedAddress.zipCode}</p>
      </section>


      <section >
        <h3 >Order Summary</h3>
        {cart.products.map((p, idx) => (
          <div key={idx} >
            <p>{p.item.productName}</p>
            <p>Qty: {p.qty}</p>
            <p>₹{p.price}</p>
          </div>
        ))}
        <hr />
        <p><strong>Total: ₹{cart.totalPrice}</strong></p>
        <p><strong>Shipping: ₹{cart.totalShipping}</strong></p>
        <p style={{ fontSize: "18px" }}>
          <strong>Grand Total: ₹{cart.totalPrice + cart.totalShipping}</strong>
        </p>
      </section>


      <section >
        <h3 >Payment Mode</h3>
        <label >
          <input
            type="radio"
            value="cod"
            checked={paymentMode === "cod"}
            onChange={(e) => setPaymentMode(e.target.value)}
          />
          Cash on Delivery (COD)
        </label>
        <label >
          <input
            type="radio"
            value="online"
            checked={paymentMode === "online"}
            onChange={(e) => setPaymentMode(e.target.value)}
          />
          Online Payment (Coming Soon)
        </label>
      </section>


      <section >
        <h3 >Terms & Conditions</h3>
        <p>Beyond 7 days you can't exchange and no return possible.</p>
        <p>Your Customer Number: <strong>{customerNumber}</strong></p>
      </section>

      <button
        onClick={handlePlaceOrder}
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px",
          backgroundColor: loading ? "#ccc" : "#4CAF50",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          border: "none",
          borderRadius: "8px",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "background 0.3s",
        }}
      >
        {loading ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
}