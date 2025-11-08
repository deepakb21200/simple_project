import React from 'react'

function App3() {
  return (
  <section class="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-sm">
 
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
          <input type="text" placeholder="Your First Name" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none">
        </div>
        <div>
          <label class="block text-gray-700 font-medium mb-2">Last Name</label>
          <input type="text" placeholder="Your Last Name" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none">
        </div>
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Email Address</label>
        <input type="email" placeholder="Your Email" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none">
      </div>

      <div>
        <label class="block text-gray-700 font-medium mb-2">Phone Number</label>
        <input type="text" placeholder="Your Phone Number" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none">
      </div>

      <div class="flex justify-end mt-6">
        <button type="button" class="bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-900 transition">
          Continue to Shipping
        </button>
      </div>
    </form>
  </div>
</section>

  )
}

export default App3