import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Shop from './Components/Shop'
import Profile from './Components/Profile'
import AdminPanel from './Components/AdminPanel'
import ShopCategory from './Components/ShopCategory'
import ContextProvider from './Context/ContextProvider'
import CartPage from './Components/CartPage'
 
import Profile2 from './Components/Profiles2'
import { CheckoutProvider } from './Context_Order/ContextOrder'
import CheckOut from './Components/CheckOut'
import Banner from './Components/Banner'
// import UserCreditentials from './Components/UserCreditentials'
// import ShippingForm from './Components/ShippingForm'
// import ReviewOrder from './Components/ReviewOrder'
// import PlaceOrder from './Components/PlaceOrder'
// import Payment from './Components/Payment'
// import Carts from './Components/Carts'
 

function App() {
  return (
    <>
 
   <div className='  min-h-screen w-full flex flex-col '>
      <Navbar/>
      {/* <Banner/> */}
 
          <ContextProvider>
   
 
 
           <Routes>
 
      <Route path="/" element={<Shop/>}/>
     
 
      <Route path="/profile" element={<Profile2/>}/>
       <Route path="/admin" element={<AdminPanel/>}/>
   
        <Route path="/shop/:category" element={  <ShopCategory/>}/>

          <Route path="/cart" element={<CartPage/>}/>
          <Route
  path="/checkout"
  element={
    <CheckoutProvider>
      <CheckOut />
    </CheckoutProvider>
  }/>
   
    </Routes>
   
 
      
  </ContextProvider>
      


   </div>
   {/* <UserCreditentials/> */}
   {/* <ShippingForm/> */}
   {/* <ReviewOrder/> */}
   {/* <Payment/> */}
   {/* <PlaceOrder/> */}

{/* <section class="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-sm">

  <div class="flex items-center justify-between mb-10">
    <div class="flex items-center text-center">
      <div class="flex items-center">
        <div class="w-10 h-10 flex items-center justify-center rounded-full bg-purple-800 text-white font-semibold">1</div>
        <div class="w-24 h-[2px] bg-gray-300"></div>
      </div>
      <p class="text-sm mt-2 text-purple-900 font-medium ml-2">Information</p>
    </div>
    <div class="flex items-center text-center">
      <div class="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-400 font-semibold">2</div>
      <div class="w-24 h-[2px] bg-gray-300"></div>
      <p class="text-sm mt-2 text-gray-500 ml-2">Shipping</p>
    </div>
    <div class="flex items-center text-center">
      <div class="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-400 font-semibold">3</div>
      <div class="w-24 h-[2px] bg-gray-300"></div>
      <p class="text-sm mt-2 text-gray-500 ml-2">Payment</p>
    </div>
    <div class="flex items-center text-center">
      <div class="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-gray-400 font-semibold">4</div>
      <p class="text-sm mt-2 text-gray-500 ml-2">Review</p>
    </div>
  </div>


  <div>
    <h2 class="text-2xl font-semibold text-purple-900 mb-2">Customer Information</h2>
    <p class="text-gray-500 mb-6">Please enter your contact details</p>

    <form class="space-y-5">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label class="block text-gray-700 font-medium mb-2">First Name</label>
          <input type="text" placeholder="Your First Name" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
        </div>
        <div>
          <label class="block text-gray-700 font-medium mb-2">Last Name</label>
          <input type="text" placeholder="Your Last Name" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
        </div>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Email Address</label>
        <input type="email" placeholder="Your Email" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Phone Number</label>
        <input type="text" placeholder="Your Phone Number" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
      </div>

      <div class="flex justify-end mt-6">
        <button type="button" class="bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-900 transition">
          Continue to Shipping
        </button>
      </div>
    </form>
  </div>

  <div>
    <h2 class="text-2xl font-semibold text-purple-900 mb-2">Shipping Address</h2>
    <p class="text-gray-500 mb-6">Where should we deliver your order?</p>

    <form class="space-y-5">
      <div>
        <label class="block text-gray-700 font-medium mb-2">Street Address</label>
        <input type="text" placeholder="Street Address" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Apartment, Suite, etc. (optional)</label>
        <input type="text" placeholder="Apartment, Suite, Unit, etc." class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label class="block text-gray-700 font-medium mb-2">City</label>
          <input type="text" placeholder="City" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
        </div>
        <div>
          <label class="block text-gray-700 font-medium mb-2">State</label>
          <input type="text" placeholder="State" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
        </div>
        <div>
          <label class="block text-gray-700 font-medium mb-2">ZIP Code</label>
          <input type="text" placeholder="ZIP Code" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"/>
        </div>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Country</label>
        <select class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none">
          <option>Select Country</option>
          <option>India</option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
        </select>
      </div>

      <div class="flex items-center">
        <input type="checkbox" id="saveAddress" class="mr-2"/>
        <label for="saveAddress" class="text-gray-700">Save this address for future orders</label>
      </div>

      <div class="flex justify-between mt-6">
        <button type="button" class="border border-purple-800 text-purple-800 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition">
          Back to Information
        </button>
        <button type="button" class="bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-900 transition">
          Continue to Payment
        </button>
      </div>
    </form>
  </div>
</section> */}

    
    </>
  )
}

export default App



// deepak

// bisht

// deepakb21200


// deepakBisht@1234



// Deepak

// Bisht


// deepakB345

// DeepakBisht@1234



// comparison
//update operators
// logical operators
//array
//array update
//aggregate expression
//element
//projection