    <div className="flex items-center justify-between mb-3">
        {/* Step 1 */}
 
          <div className=' flex flex-col   '>
            <div className='flex justify-center   items-center '>
              <div className={`w-10 h-10 flex items-center justify-center 
            rounded-full font-semibold ${   step > 1  ? "bg-purple-800 text-white"
                : step === 1   ? "border-2 border-purple-800 text-purple-800"
                : "border-2 border-gray-300 text-gray-400"
            }`}>
            {step > 1 ? "✓" : "1"}
          </div>
 
            </div>


           <p  className={`text-sm mt-1 ${  step >= 1 ? "text-purple-900" : 
           "text-gray-400" }`} >
            Information
          </p> 
          </div>
          
           <div  className={`w-24 h-[2px] ${
              step > 1 ? "bg-purple-800" : "bg-gray-300"
            }    `}
          ></div> 


 
   
        {/* Step 2 */}
        <div className="flex flex-col   ">
          <div className='flex justify-center   items-center'>
            <div
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
              step > 2
                ? "bg-purple-800 text-white"
                : step === 2
                ? "bg-purple-800 text-white"
                : "border-2 border-gray-300 text-gray-400"
            }`}
          >
            {step > 2 ? "✓" : "2"}
          </div>
          </div>
     
          <p
            className={`text-sm mt-1 ${
              step >= 2 ? "text-purple-900" : "text-gray-400"
            } `}
          >
            Shipping
          </p>
        </div>
             <div
            className={`w-24 h-[2px] ${
              step > 2 ? "bg-purple-800" : "bg-gray-300"
            }`}
          ></div>

        {/* Step 3 */}
<div className="flex flex-col   ">
          <div className='flex justify-center   items-center'>
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
              step > 3
                ? "bg-purple-800 text-white"
                : step === 3
                ? "bg-purple-800 text-white"
                : "border-2 border-gray-300 text-gray-400"
            }`}
          >
            {step > 3 ? "✓" : "3"}
          </div>
            </div>
             <p
            className={`text-sm mt-1 ml-2 ${
              step >= 3 ? "text-purple-900" : "text-gray-400"
            }`}
          >
            Payment
          </p>
        
         
        </div>
          <div
            className={`w-24 h-[2px] ${
              step > 3 ? "bg-purple-800" : "bg-gray-300"
            }`}
          ></div>
      

        {/* Step 4 */}
<div className="flex flex-col   ">
          <div className='flex justify-center   items-center'>
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
              step === 4 ? "bg-purple-800 text-white" : "border-2 border-gray-300 text-gray-400"
            }`}
          >
            4
          </div>
          </div>
          <p
            className={`text-sm mt-1 ${
              step === 4 ? "text-purple-900" : "text-gray-400"
            }`}
          >
            Review
          </p>
        </div>
      </div>























































import React from 'react'
import UserCreditentials from './UserCreditentials'
import ShippingForm from './ShippingForm'
import Payment from './Payment'
import ReviewOrder from './ReviewOrder'
import PlaceOrder from './PlaceOrder'
import { useCheckout } from '../Context_Order/ContextOrder'

function CheckOut() {
      const { state, dispatch } = useCheckout();
  const { step } = state;
    const nextStep = () => dispatch({ type: "NEXT_STEP" });
  const prevStep = () => dispatch({ type: "PREV_STEP" });
  return (
    <>
    <div className=' py-10 px-4 flex justify-center flex-1 gap-4 bg-white'>

 
       {/* Progress Steps */}
      {/* <div className="flex items-center justify-between mb-10">
        <div className="flex items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-purple-800 text-purple-800 font-semibold">
            ✓
          </div>
          <div className="w-24 h-[2px] bg-purple-800"></div>
          <p className="text-sm mt-2 text-purple-900 ml-2">Information</p>
        </div>
        <div className="flex items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-800 text-white font-semibold">
            2
          </div>
          <div className="w-24 h-[2px] bg-gray-300"></div>
          <p className="text-sm mt-2 text-purple-900 ml-2">Shipping</p>
        </div>
        <div className="flex items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-400 font-semibold">
            3
          </div>
          <div className="w-24 h-[2px] bg-gray-300"></div>
          <p className="text-sm mt-2 text-gray-500 ml-2">Payment</p>
        </div>
        <div className="flex items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-400 font-semibold">
            4
          </div>
          <p className="text-sm mt-2 text-gray-500 ml-2">Review</p>
        </div>
      </div> */}

<div className='  '>
    {/* <div className="flex items-center justify-between mb-10">
        <div className="flex items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-purple-800 text-purple-800 font-semibold">
            ✓
          </div>
          <div className="w-24 h-[2px] bg-purple-800"></div>
          <p className="text-sm mt-2 text-purple-900 ml-2">Information</p>
        </div>
        <div className="flex items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-800 text-white font-semibold">
            2
          </div>
          <div className="w-24 h-[2px] bg-gray-300"></div>
          <p className="text-sm mt-2 text-purple-900 ml-2">Shipping</p>
        </div>
        <div className="flex items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-400 font-semibold">
            3
          </div>
          <div className="w-24 h-[2px] bg-gray-300"></div>
          <p className="text-sm mt-2 text-gray-500 ml-2">Payment</p>
        </div>
        <div className="flex items-center text-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-400 font-semibold">
            4
          </div>
            <div className="w-24 h-[2px] bg-gray-300"></div>
          <p className="text-sm mt-2 text-gray-500 ml-2">Review</p>
        </div>
      </div> */}
   
<div className="flex flex-col sm:flex-row items-center justify-between mb-3 sm:space-x-4 space-y-4 sm:space-y-0">
  {/* Step 1 */}
  <div className='flex flex-col items-center'>
    <div className='flex justify-center items-center'>
      <div className={`w-10 h-10 flex items-center justify-center 
        rounded-full font-semibold ${step > 1 ? "bg-purple-800 text-white" : step === 1 ? "border-2 border-purple-800 text-purple-800" : "border-2 border-gray-300 text-gray-400"}`}>
        {step > 1 ? "✓" : "1"}
      </div>
    </div>
    <p className={`text-sm mt-1 ${step >= 1 ? "text-purple-900" : "text-gray-400"}`}>
      Information
    </p>
  </div>

  <div className={`hidden sm:block flex-1 h-[2px] ${step > 1 ? "bg-purple-800" : "bg-gray-300"}`}></div>

  {/* Step 2 */}
  <div className='flex flex-col items-center'>
    <div className='flex justify-center items-center'>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
        step > 2 ? "bg-purple-800 text-white" : step === 2 ? "bg-purple-800 text-white" : "border-2 border-gray-300 text-gray-400"
      }`}>
        {step > 2 ? "✓" : "2"}
      </div>
    </div>
    <p className={`text-sm mt-1 ${step >= 2 ? "text-purple-900" : "text-gray-400"}`}>
      Shipping
    </p>
  </div>

  <div className={`hidden sm:block flex-1 h-[2px] ${step > 2 ? "bg-purple-800" : "bg-gray-300"}`}></div>

  {/* Step 3 */}
  <div className='flex flex-col items-center'>
    <div className='flex justify-center items-center'>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
        step > 3 ? "bg-purple-800 text-white" : step === 3 ? "bg-purple-800 text-white" : "border-2 border-gray-300 text-gray-400"
      }`}>
        {step > 3 ? "✓" : "3"}
      </div>
    </div>
    <p className={`text-sm mt-1 ${step >= 3 ? "text-purple-900" : "text-gray-400"}`}>
      Payment
    </p>
  </div>

  <div className={`hidden sm:block flex-1 h-[2px] ${step > 3 ? "bg-purple-800" : "bg-gray-300"}`}></div>

  {/* Step 4 */}
  <div className='flex flex-col items-center'>
    <div className='flex justify-center items-center'>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
        step === 4 ? "bg-purple-800 text-white" : "border-2 border-gray-300 text-gray-400"
      }`}>
        4
      </div>
    </div>
    <p className={`text-sm mt-1 ${step === 4 ? "text-purple-900" : "text-gray-400"}`}>
      Review
    </p>
  </div>
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

            <div className="font-semibold text-md">
              <p className="mb-2 text-lg">Shipping</p>
              <div className="space-y-2 pl-1">
                <label className="flex items-center gap-2">
                  <input type="radio" name="ship" defaultChecked />
                  <span>Standard Delivery – ₹99</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="ship" />
                  <span>Express Delivery – ₹249</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="ship" />
                  <span>Free Shipping (Orders over ₹3000)</span>
                </label>
              </div>
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

          <button className="w-full mt-3 text-pink-600 hover:underline text-sm">
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





































   
<div className="flex flex-col sm:flex-row items-center justify-between mb-3 sm:space-x-4 space-y-4 sm:space-y-0">
  {/* Step 1 */}
  <div className='flex flex-col items-center'>
    <div className='flex justify-center items-center'>
      <div className={`w-10 h-10 flex items-center justify-center 
        rounded-full font-semibold ${step > 1 ? "bg-purple-800 text-white" : step === 1 ? "border-2 border-purple-800 text-purple-800" : "border-2 border-gray-300 text-gray-400"}`}>
        {step > 1 ? "✓" : "1"}
      </div>
    </div>
    <p className={`text-sm mt-1 ${step >= 1 ? "text-purple-900" : "text-gray-400"}`}>
      Information
    </p>
    
  </div>
 <div className={`hidden sm:block flex-1 h-[2px] ${step > 1 ? "bg-red-500" : "bg-gray-300"}`}></div>
 

  {/* Step 2 */}
  <div className='flex flex-col items-center'>
    <div className='flex justify-center items-center'>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
        step > 2 ? "bg-purple-800 text-white" : step === 2 ? "bg-purple-800 text-white" : "border-2 border-gray-300 text-gray-400"
      }`}>
        {step > 2 ? "✓" : "2"}
      </div>
    </div>
    <p className={`text-sm mt-1 ${step >= 2 ? "text-purple-900" : "text-gray-400"}`}>
      Shipping
    </p>
  </div>

  <div className={`hidden sm:block flex-1 h-[2px] ${step > 2 ? "bg-purple-800" : "bg-gray-300"}`}></div>

  {/* Step 3 */}
  <div className='flex flex-col items-center'>
    <div className='flex justify-center items-center'>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
        step > 3 ? "bg-purple-800 text-white" : step === 3 ? "bg-purple-800 text-white" : "border-2 border-gray-300 text-gray-400"
      }`}>
        {step > 3 ? "✓" : "3"}
      </div>
    </div>
    <p className={`text-sm mt-1 ${step >= 3 ? "text-purple-900" : "text-gray-400"}`}>
      Payment
    </p>
  </div>

  <div className={`hidden sm:block flex-1 h-[2px] ${step > 3 ? "bg-purple-800" : "bg-gray-300"}`}></div>

  {/* Step 4 */}
  <div className='flex flex-col items-center'>
    <div className='flex justify-center items-center'>
      <div className={`w-10 h-10 flex items-center justify-center rounded-full font-semibold ${
        step === 4 ? "bg-purple-800 text-white" : "border-2 border-gray-300 text-gray-400"
      }`}>
        4
      </div>
    </div>
    <p className={`text-sm mt-1 ${step === 4 ? "text-purple-900" : "text-gray-400"}`}>
      Review
    </p>
  </div>
</div>
