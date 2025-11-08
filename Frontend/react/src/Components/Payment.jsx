import { useContext, useEffect, useState } from "react";
import { CreditCard, Apple } from "lucide-react";
import { FaPaypal } from "react-icons/fa";
import { CheckoutContext } from "../Context_Order/ContextOrder";

export default function Payment({prevStep , nextStep}) {
    const { state, dispatch } = useContext(CheckoutContext);
  const { formData } = state;

// Initialize state directly from context
const [paymentMethod, setPaymentMethod] = useState(
  formData.payment?.paymentMethod || ""
);
  const handleContinue = () => {
    // Save selected payment method to context
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "payment",
        data: { paymentMethod },
      },
    });
    nextStep();
  };


  return (
    <div className="   mx-auto p-6 bg-white rounded-2xl   ">
      {/* Progress Bar */}


      <h2 className="text-2xl font-semibold text-gray-900 mb-2">
        Payment Method
      </h2>
      <p className="text-gray-500 mb-6">
        Choose how you'd like to pay
      </p>

      {/* Payment Options */}
      <div className="space-y-4 text-[#3e0925]">
        {/* Credit/Debit Card */}
        <div
          className={`border rounded-xl p-5 transition-all ${
            paymentMethod === "card"
              ? "border-purple-700 shadow-sm"
              : "border-gray-300"
          }`}
        >
          <label
            className="flex items-center gap-2 font-medium  cursor-pointer"
            onClick={() => setPaymentMethod("card")}
          >
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === "card"}
              onChange={() => setPaymentMethod("card")}
              className="text-purple-700"
            />
            <CreditCard size={18} />
            Credit / Debit Card
          </label>

          {paymentMethod === "card" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 col-span-2"
              />
              <input
                type="text"
                placeholder="MM/YY"
                className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="123"
                className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="text"
                placeholder="John Doe"
                className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-600 col-span-2"
              />
            </div>
          )}
        </div>

        {/* PayPal */}
        <div
          className={`border rounded-xl p-5 flex justify-between items-center cursor-pointer ${
            paymentMethod === "paypal"
              ? "border-purple-700 shadow-sm"
              : "border-gray-300"
          }`}
          onClick={() => setPaymentMethod("paypal")}
        >
          <label className="flex items-center gap-2 font-medium ">
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === "paypal"}
              onChange={() => setPaymentMethod("paypal")}
              className="text-purple-700"
            />
            {/* <Paypal size={18} /> */}
             <FaPaypal size={18} />
            PayPal
          </label>
        </div>

        {/* Apple Pay */}
        <div
          className={`border rounded-xl p-5 flex justify-between items-center cursor-pointer ${
            paymentMethod === "apple"
              ? "border-purple-700 shadow-sm"
              : "border-gray-300"
          }`}
          onClick={() => setPaymentMethod("apple")}
        >
          <label className="flex items-center gap-2 font-medium ">
            <input
              type="radio"
              name="payment"
              checked={paymentMethod === "apple"}
              onChange={() => setPaymentMethod("apple")}
              className="text-purple-700"
            />
            <Apple size={18} />
            Apple Pay
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          className="border border-purple-700 text-purple-700 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition"
        >
          Back to Shipping
        </button>
        <button
          onClick={handleContinue}
          className="bg-purple-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-900 transition"
        >
          Review Order
        </button>
      </div>
    </div>
  );
}











      {/* <div className="flex items-center justify-between mb-8">
        {["Information", "Shipping", "Payment", "Review"].map((step, index) => (
          <div key={step} className="flex items-center w-full">
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold ${
                index < 2
                  ? "bg-purple-800 text-white"
                  : index === 2
                  ? "bg-purple-700 text-white"
                  : "border-2 border-gray-400 text-gray-400"
              }`}
            >
              {index + 1}
            </div>
            {index < 3 && (
              <div
                className={`flex-1 h-0.5 ${
                  index < 2 ? "bg-purple-800" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div> */}