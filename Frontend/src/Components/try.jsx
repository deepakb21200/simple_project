<div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-200 mt-8">
  {/* Heading */}
  <div className="text-center mb-8">
    <h2 className="text-3xl font-extrabold text-purple-900 tracking-tight">
      Customer Information
    </h2>
    <p className="text-gray-500 mt-2 text-base">
      Please enter your contact details
    </p>
  </div>

  {/* Form Start */}
  <form className="">
    {/* First & Last Name */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label className="block text-gray-700 font-semibold mb-2">First Name</label>
        <input
          type="text"
          placeholder="Your First Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-purple-600 focus:border-purple-600 focus:outline-none transition-all duration-300"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Last Name</label>
        <input
          type="text"
          placeholder="Your Last Name"
          className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-purple-600 focus:border-purple-600 focus:outline-none transition-all duration-300"
        />
      </div>
    </div>

    {/* Email */}
    <div>
      <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-purple-600 focus:border-purple-600 focus:outline-none transition-all duration-300"
      />
    </div>

    {/* Phone Number + OTP */}
    <div className=' '>
      {/* <label className="block text-gray-700 font-semibold mb-2">Phone Number</label> */}
      <div className="flex  items-start  justify-center gap-3">
  
            <input
          type="text"
          placeholder="Your Phone Number"
          className="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-purple-600 focus:border-purple-600 focus:outline-none transition-all duration-300"
        />
   {/* bg-gradient-to-r from-purple-700 to-purple-900 */}
        {!otpSent && (
          <button
            type="button"
            onClick={handleSendOtp}
            className=" text-white px-6 py-2.5 rounded-xl font-medium shadow hover:shadow-lg hover:scale-[1.03] transition-all duration-300
             border-2 border-black"
          >
            Send OTP
          </button>
        )}
      </div>
 

  


    </div>

    {/* OTP Section */}
    {otpSent && !otpVerified && (
      <div className=''>
        <label className="block text-gray-700 font-semibold mb-2">Enter OTP</label>
        <div className="flex  items-start gap-3 ">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="flex-1 border border-gray-300 rounded-xl px-4   focus:ring-2 focus:ring-purple-600 focus:border-purple-600 focus:outline-none transition-all duration-300"
          />
          <button
            type="button"
            onClick={handleVerifyOtp}
            className="bg-green-600 text-white px-5   rounded-xl font-medium hover:bg-green-700 shadow hover:shadow-md transition-all duration-300"
          >
            Verify
          </button>
          <button
            type="button"
            onClick={handleResendOtp}
            className="border border-purple-700 text-purple-800 px-5  rounded-xl font-medium hover:bg-purple-50 shadow-sm transition-all duration-300"
          >
            Resend
          </button>
        </div>
      </div>
    )}

    {/* OTP Success Message */}
    {otpVerified && (
      <p className="text-green-700 font-semibold bg-green-50 border border-green-200 rounded-xl py-2 px-4 text-center">
        ✅ Phone number verified successfully!
      </p>
    )}

    {/* Continue Button */}
    <div className="flex justify-end mt-6">
      <button
        type="button"
        disabled={!otpVerified}
        className={`px-8 py-2.5 rounded-xl font-semibold transition-all duration-300 ${
          otpVerified
            ? "bg-gradient-to-r from-purple-700 to-purple-900 text-white shadow-md hover:shadow-xl hover:scale-[1.02]"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        Continue to Shipping
      </button>
    </div>
  </form>
</div>
usercredients