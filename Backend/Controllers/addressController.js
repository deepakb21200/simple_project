import Address from "../Models/AddressSchema.js";
import OTP from "../Models/OtpSchema.js";



export async function getAddresses(req, res) {
  try {
    const userId = req.user._id;
    //1 ascending order , -1 descending order 
    const addresses = await Address.find({ userId })
    .sort({ isDefault: -1, createdAt: -1 });
    res.status(200).json({ addresses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

export async function addAddress(req, res) {
  try {
    const userId = req.user._id;
    const { fullName, phone, addressLine1, addressLine2, city, state, zipCode, country, isDefault } = req.body;

      
    const verifiedOTP = await OTP.findOne({
      userId,
      phone,
      verified: true,
      expiresAt: { $gt: new Date() }
    }); //otp

    if (!verifiedOTP) {
      return res.status(400).json({ message: "Phone number not verified. Please verify OTP first." });
    }

    if (isDefault) {
      await Address.updateMany({ userId }, { isDefault: false });
    }

    const address = new Address({
      userId,
      fullName,
      phone,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      country: country || "India",
      isDefault: isDefault || false,
    });

    await address.save();

    // Delete used OTP
    await OTP.deleteMany({ userId, phone });

    res.status(201).json({ message: "Address added successfully", address });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
