import React, { useContext } from 'react'
import UserCreditentials from './UserCreditentials'
import ShippingForm from './ShippingForm'
import Payment from './Payment'
import ReviewOrder from './ReviewOrder'
import PlaceOrder from './PlaceOrder'
import { CheckoutContext } from '../Context_Order/ContextOrder'
 

function CheckOut() {
   const { state, dispatch } = useContext(CheckoutContext); 
  const { step } = state;
    const nextStep = () => dispatch({ type: "NEXT_STEP" });
  const prevStep = () => dispatch({ type: "PREV_STEP" });
  return (
    <>
    <div className=' py-10 px-4 flex justify-center flex-1 gap-4 bg-white border '>

 
 
<div className='   w-[800px]'>
 

    <div className="relative flex items-center justify-between w-full px-4 py-1  overflow-hidden 
   ">
  {/* Background line */}
 <div className="absolute top-1/2 left-5 right-5 h-1 bg-gray-300 rounded transform -translate-y-1/2
  "></div> 

  {/* Progress line */}
  <div
    className="absolute top-1/2 h-1 bg-purple-800 rounded transform -translate-y-1/2 transition-all duration-500"
    style={{
      left: '1.25rem', // 5px = 1.25rem padding from left
      // width: `calc(((100% - 2.5rem) / 3) * ${step - 1})`, 
       width: `calc(((100% - 2.5rem) / 3) * ${Math.min(step - 1, 3)})`,
    }}
  ></div>

  {/* Step circles */}
  


  {[1, 2, 3, 4].map((s) => (
     <div key={s} className="flex flex-col items-center z-10  ">
      <div  className={`w-10 h-10 flex items-center justify-center rounded-full 
      font-semibold transition-colors duration-500  relative  ${
          step > s ? 'bg-purple-800 text-white '
            : step === s
            ? 'bg-purple-800 text-white'
            : 'border-2 border-gray-300 text-gray-400 bg-white'
        }`}>

        {step > s ? '✓' : s}
      </div>
     
    </div>
  ))}


 {/* <p className={`text-sm mt-1 ${step >= s ? 'text-purple-900' : 'text-gray-400'}`}>
        {s === 1
          ? 'Information'
          : s === 2
          ? 'Shipping'
          : s === 3
          ? 'Payment'
          : 'Review'}
      </p> */}


  
</div>




      {/* Current Form */}
      {step === 1 && <UserCreditentials nextStep={nextStep} />}
      {step === 2 && <ShippingForm nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Payment nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <ReviewOrder nextStep={nextStep} prevStep={prevStep} />}
      {step === 5 && <PlaceOrder nextStep={nextStep} prevStep={prevStep}/>}

</div>
 
    
         

     <div className=" bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            Order Summary
          </h2>

          <div className="space-y-4 text-sm  ">
            <div className="flex justify-between font-bold text-xl text-gray-800 ">
              <span>Subtotal</span>
              <span>₹{40000}</span>
            </div>
            <div className="flex justify-between font-bold text-xl text-gray-800 ">
              <span>Shipping</span>
              <span>₹99</span>
            </div>

        
            <div className="flex justify-between text-lg font-semibold">
              <span>Tax</span>
              <span>$27.00</span>
            </div>

            <div className="flex justify-between text-lg font-semibold">
              <span>Discount</span>
              <span>-$0.00</span>
            </div>
          </div>

          <hr className="my-5" />

          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Total</span>
            <span>$301.95</span>
          </div>

          <button className="w-full mt-6 py-3 bg-pink-600 text-white font-medium rounded-lg hover:bg-pink-700 transition">
            Proceed to Checkout →
          </button>

          <button className="w-full mt-3 text-pink-600 hover:underline  ">
            Continue Shopping
          </button>

          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>We Accept</p>
            <div className="flex justify-center gap-4 mt-2 text-xl">💳 🏦 💰</div>
          </div>
        </div>

 

      </div>
    </>
  )
}

export default CheckOut



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