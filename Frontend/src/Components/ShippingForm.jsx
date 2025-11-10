import React, { useContext, useState } from "react";
import { CheckoutContext } from "../Context_Order/ContextOrder";

const ShippingForm = ({prevStep , nextStep}) => {

    const { state, dispatch } = useContext(CheckoutContext);
  const { formData } = state;

  // Pre-fill data from context
  const [address1, setAddress1] = useState(formData.shipping.address1 || "");
  const [address2, setAddress2] = useState(formData.shipping.address2 || "");
  const [city, setCity] = useState(formData.shipping.city || "");
  const [stateName, setStateName] = useState(formData.shipping.state || "");
  const [zip, setZip] = useState(formData.shipping.zip || "");
  const [country, setCountry] = useState(formData.shipping.country || "");
  const [saveAddress, setSaveAddress] = useState(formData.shipping.saveAddress || false);

  const handleContinue = () => {
    // Save shipping data to context
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "shipping",
        data: { address1, address2, city, state: stateName, zip, country, saveAddress },
      },
    });

    // Go to next step
    nextStep();
  };


  return (
    // <section className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-sm">
        <section className=" mx-auto p-6  bg-white rounded-2xl   "> 
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

      {/* Shipping Info */}
      <div>
        <h2 className="text-2xl font-semibold text-purple-900 mb-2">
          Shipping Address
        </h2>
        <p className="text-gray-500 mb-6">
          Where should we deliver your order?
        </p>

        <form className="text-[#3e0925]">
          {/* Address Line 1 */}
          <div>
            <label className="block  font-medium mb-2">
              Address Line 1
            </label>
            <input
              type="text"
              placeholder="Street Address"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
               value={address1}
            onChange={(e) => setAddress1(e.target.value)}
            />
          </div>

          {/* Address Line 2 */}
          <div>
            <label className="block  font-medium mb-2">
              Address Line 2 (optional)
            </label>
            <input
              type="text"
              placeholder="Apartment, Suite, Unit, etc."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
              value={address2}
            onChange={(e) => setAddress2(e.target.value)}
            />
          </div>

          {/* City, State, ZIP */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div>
              <label className="block  font-medium mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="City"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    value={city}
              onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <label className="block  font-medium mb-2">
                State
              </label>
              <input
                type="text"
                placeholder="State"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                 value={stateName}
              onChange={(e) => setStateName(e.target.value)}
              />
            </div>
            <div>
              <label className="block  font-medium mb-2">
                ZIP Code
              </label>
              <input
                type="text"
                placeholder="ZIP Code"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  value={zip}
              onChange={(e) => setZip(e.target.value)}
              />
            </div>
          </div>

       
          <div>
            <label className="block  font-medium mb-2">
              Country
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none text-black"
             value={country}
            onChange={(e) => setCountry(e.target.value)}>
              <option>Select Country</option>
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
            </select>
          </div>

     


       <div className="flex items-center gap-2 mt-6 mb-6   " >
        <input
          type="checkbox"
          id="saveAddress"
          className="w-4 h-4 accent-purple-700 flex-shrink-0"
           checked={saveAddress}
            onChange={(e) => setSaveAddress(e.target.checked)}
        />
         <label htmlFor="saveAddress" className="text-gray-700">
              Save this address for future orders
            </label>
      </div>

          {/* Navigation Buttons */}
     
          <div className="flex justify-between  mt-6 gap-4">
  <button
    type="button"
    className="border border-purple-800 text-purple-800  rounded-lg font-semibold hover:bg-purple-50 transition px-3 py-2.5"
    onClick={prevStep}
  >
    Back to Information
  </button>
  <button
    type="button"
    className="bg-[#8c0d4f] text-white rounded-lg font-semibold px-3 py-2.5"
   onClick={handleContinue}
  >
    Continue to Payment
  </button>
</div>

        </form>
      </div>
    </section>
  );
};

export default ShippingForm;
