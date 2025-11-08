export default function ReviewOrder({prevStep , nextStep}) {
 
  
  return (
    <div className="  mx-auto p-6 bg-white rounded-2xl   ">
      {/* Progress Bar */}
      {/* <div className="flex items-center justify-between mb-8">
        {["Information", "Shipping", "Payment", "Review"].map((step, index) => (
          <div key={step} className="flex items-center w-full">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                index < 3
                  ? "bg-purple-800 text-white"
                  : "bg-purple-700 text-white"
              }`}
            >
              {index + 1}
            </div>
            {index < 3 && (
              <div className="flex-1 h-0.5 bg-purple-800"></div>
            )}
          </div>
        ))}
      </div> */}

      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Review Your Order
      </h2>
      <p className="text-gray-500 mb-6">
        Please review your information before placing your order
      </p>

      {/* Contact Info */}
      <div className="border rounded-xl p-5 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-800">Contact Information</h3>
          <button className="text-purple-700 font-medium hover:underline">
            Edit
          </button>
        </div>
        <p className="text-gray-700">John Doe</p>
        <p className="text-gray-700">johndoe@example.com</p>
        <p className="text-gray-700">+1 (555) 123-4567</p>
      </div>

      {/* Shipping Address */}
      <div className="border rounded-xl p-5 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-800">Shipping Address</h3>
          <button className="text-purple-700 font-medium hover:underline">
            Edit
          </button>
        </div>
        <p className="text-gray-700">123 Main Street, Apt 4B</p>
        <p className="text-gray-700">New York, NY 10001</p>
        <p className="text-gray-700">United States</p>
      </div>

      {/* Payment Method */}
      <div className="border rounded-xl p-5 mb-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold text-gray-800">Payment Method</h3>
          <button className="text-purple-700 font-medium hover:underline">
            Edit
          </button>
        </div>
        <p className="text-gray-700 flex items-center gap-2">
          💳 Credit Card ending in 3456
        </p>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center gap-2 mt-6 mb-6 " >
        <input
          type="checkbox"
          id="terms"
          className="w-4 h-4 accent-purple-700"
        />
        <label htmlFor="terms" className="text-gray-700 ">
          I agree to the{" "}
          <span className="text-purple-700 font-semibold hover:underline cursor-pointer">
            Terms and Conditions
          </span>{" "}
          and{" "}
          <span className="text-purple-700 font-semibold hover:underline cursor-pointer">
            Privacy Policy
          </span>
        </label>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
       
          className="border border-purple-700 text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition"
          onClick={prevStep}
        >
          Back to Payment
        </button>
        <button
          onClick={nextStep}
          className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  );
}
