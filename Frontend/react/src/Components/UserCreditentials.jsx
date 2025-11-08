import React, { useContext } from 'react'
import { useState } from 'react';
import { CheckoutContext } from '../Context_Order/ContextOrder';

function UserCreditentials({ nextStep}) {
const { state, dispatch } = useContext(CheckoutContext); 
  const { formData } = state;

  const [firstName, setFirstName] = useState(formData.information.firstName || "");
  const [lastName, setLastName] = useState(formData.information.lastName || "");
  const [email, setEmail] = useState(formData.information.email || "");
  const [phone, setPhone] = useState(formData.information.phone || "");













  
      const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  const handleSendOtp = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setOtpSent(true);
    alert(`OTP sent successfully: ${newOtp}`); // simulating OTP send
  };

  const handleVerifyOtp = () => {
    if (otp === generatedOtp) {
      setOtpVerified(true);
      alert("✅ OTP verified successfully!");
    } else {
      alert("❌ Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = () => {
    handleSendOtp();
    alert("🔄 OTP resent successfully!");
  };


    const handleContinue = () => {
    // Save data to context
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: {
        key: "information",
        data: { firstName, lastName, email, phone },
      },
    });

    // Move to next step
    nextStep();
  };


 return (
    // <div>
    //   <h2 className="text-2xl font-semibold text-purple-900 mb-2">Customer Information</h2>
    //   <p className="text-gray-500 mb-6">Please enter your contact details</p>

    //   <form className="space-y-5">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    //       <div>
    //         <label className="block text-gray-700 font-medium mb-2">First Name</label>
    //         <input
    //           type="text"
    //           placeholder="Your First Name"
    //           className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-gray-700 font-medium mb-2">Last Name</label>
    //         <input
    //           type="text"
    //           placeholder="Your Last Name"
    //           className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
    //         />
    //       </div>
    //     </div>

    //     <div>
    //       <label className="block text-gray-700 font-medium mb-2">Email Address</label>
    //       <input
    //         type="email"
    //         placeholder="Your Email"
    //         className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
    //       />
    //     </div>

    //     <div>
    //       <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
    //       <div className="flex items-center gap-3">
    //         <input
    //           type="text"
    //           placeholder="Your Phone Number"
    //           className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
    //         />
    //         {!otpSent && (
    //           <button
    //             type="button"
    //             onClick={handleSendOtp}
    //             className="bg-purple-800 text-white px-4 py-2 rounded-lg hover:bg-purple-900 transition"
    //           >
    //             Send OTP
    //           </button>
    //         )}
    //       </div>
    //     </div>

    //     {otpSent && !otpVerified && (
    //       <div>
    //         <label className="block text-gray-700 font-medium mb-2">Enter OTP</label>
    //         <div className="flex items-center gap-3">
    //           <input
    //             type="text"
    //             value={otp}
    //             onChange={(e) => setOtp(e.target.value)}
    //             placeholder="Enter OTP"
    //             className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:outline-none"
    //           />
    //           <button
    //             type="button"
    //             onClick={handleVerifyOtp}
    //             className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
    //           >
    //             Verify
    //           </button>
    //           <button
    //             type="button"
    //             onClick={handleResendOtp}
    //             className="border border-purple-800 text-purple-800 px-4 py-2 rounded-lg hover:bg-purple-50 transition"
    //           >
    //             Resend
    //           </button>
    //         </div>
    //       </div>
    //     )}

    //     {otpVerified && (
    //       <p className="text-green-700 font-semibold">✅ Phone number verified successfully!</p>
    //     )}

    //     <div className="flex justify-end mt-6">
    //       <button
    //         type="button"
    //         disabled={!otpVerified}
    //         className={`px-6 py-2 rounded-lg font-semibold transition ${
    //           otpVerified
    //             ? "bg-purple-800 text-white hover:bg-purple-900"
    //             : "bg-gray-300 text-gray-500 cursor-not-allowed"
    //         }`}
    //       >
    //         Continue to Shipping
    //       </button>
    //     </div>
    //   </form>
    // </div>



        <div className="  mx-auto   p-6 rounded-2xl    ">
  {/* Heading */}
  <div className=" mb-8">
    <h2 className="text-3xl font-extrabold text-purple-900 tracking-tight">
      Customer Information
    </h2>
    <p className="text-gray-500 mt-2 text-base">
      Please enter your contact details
    </p>
  </div>

  {/* Form Start */}
  <form className="text-[#3e0925]">
    {/* First & Last Name */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
      <div>
        <label className="block  font-semibold mb-2 ">
          First Name
        </label>
        <input
          type="text"
          placeholder="Your First Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 
                     focus:ring-2 focus:ring-purple-600 focus:border-purple-600 
                     focus:outline-none transition-all duration-300"
                      value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label className="block   font-semibold mb-2">
          Last Name
        </label>
        <input
          type="text"
          placeholder="Your Last Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 
                     focus:ring-2 focus:ring-purple-600 focus:border-purple-600 
                     focus:outline-none transition-all duration-300"
                     value={lastName}
              onChange={(e) => setLastName(e.target.value)}
        />
      </div>
    </div>

    {/* Email */}
    <div>
      <label className="block   font-semibold mb-2">
        Email Address
      </label>
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 
                   focus:ring-2 focus:ring-purple-600 focus:border-purple-600 
                   focus:outline-none transition-all duration-300"
                      value={email}
            onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    {/* Phone Number + OTP */}
    <div>
      <label className="block   font-semibold mb-2">
        Phone Number
      </label>

      {/* Row for input + button */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-3">
        <input
          type="text"
          placeholder="Your Phone Number"
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 
                     focus:ring-2 focus:ring-purple-600 focus:border-purple-600 
                     focus:outline-none transition-all duration-300"
                        value={phone}
            onChange={(e) => setPhone(e.target.value)}
        />
        {!otpSent && (
          <button
            type="button"
            onClick={handleSendOtp}
            className="bg-gradient-to-r from-purple-700 to-purple-900 
                       text-white px-6 py-2.5 rounded-xl font-medium shadow 
                       hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
          >
            Send OTP
          </button>
        )}
      </div>

      {/* Smooth inline OTP section */}
      {otpSent && (
        <div className="mt-4 flex flex-col sm:flex-row sm:items-start gap-3 animate-fadeIn">
          {!otpVerified && (
            <>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 
                           focus:ring-2 focus:ring-purple-600 focus:border-purple-600 
                           focus:outline-none transition-all duration-300"
              />
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="bg-green-600 text-white px-5 py-2.5 rounded-xl font-medium 
                           hover:bg-green-700 shadow hover:shadow-md transition-all duration-300"
              >
                Verify
              </button>
              <button
                type="button"
                onClick={handleResendOtp}
                className="border border-purple-700 text-purple-800 px-5 py-2.5 rounded-xl 
                           font-medium hover:bg-purple-50 shadow-sm transition-all duration-300"
              >
                Resend
              </button>
            </>
          )}

          {otpVerified && (
            <p className="text-green-700 font-semibold bg-green-50 border border-green-200 rounded-xl py-2 px-4 text-center flex-1">
              ✅ Phone number verified successfully!
            </p>
          )}
        </div>
      )}
    </div>

    {/* Continue Button */}
    <div className="flex justify-end pt-4">
      <button
        type="button"
        // disabled={!otpVerified}
        className={`px-8 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
          otpVerified
            ? "bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-md hover:shadow-xl   hover:bg-[#f596c7]"
            : "bg-[#8c0d4f] text-white  hover:bg-[#8c0d4fda]"
        }`}
        // cursor-not-allowed
     onClick={handleContinue}
      >
        Continue to Shipping
      </button>
    </div>
  </form>
</div>

  

  );
}

export default UserCreditentials