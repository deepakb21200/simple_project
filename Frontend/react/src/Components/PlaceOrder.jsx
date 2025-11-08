export default function PlaceOrder() {
  return (
    // min-h-[70vh] 
    <div className="flex flex-col items-center   min-h-screen text-center p-6">
      {/* ✅ Success Icon */}
      <div className="bg-green-100 text-green-600 rounded-full p-6 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>

      {/* 🎉 Success Message */}
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Order Placed Successfully!
      </h1>
      <p className="text-gray-600 max-w-md">
        Thank you for shopping with us. Your order has been received and is being processed.
        You’ll receive a confirmation email shortly.
      </p>

      {/* 🧾 Order Details */}
      <div className="mt-8 bg-white shadow-lg rounded-2xl p-6 w-full max-w-md border">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Order ID:</span>
          <span className="font-medium text-gray-800">#123456789</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Estimated Delivery:</span>
          <span className="font-medium text-gray-800">Nov 10, 2025</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-gray-600">Total Amount:</span>
          <span className="font-semibold text-gray-900">₹1,299</span>
        </div>
      </div>

      {/* 🔙 Back to Home Button */}
      <button
        onClick={() => window.location.href = "/"}
        className="mt-8 bg-purple-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-800 transition"
      >
        Continue Shopping
      </button>
    </div>
  );
}
