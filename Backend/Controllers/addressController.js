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
    //1 ascending order 2 descending order
    const userId = req.user._id;
    const { fullName, phone, addressLine1, addressLine2, city, state, zipCode, country, isDefault } = req.body;

      
    // const verifiedOTP = await OTP.findOne({
    //   userId,
    //   phone, // ye puchna hai 
    //   verified: true,
    //   expiresAt: { $gt: new Date() } //ye kab run ho raha hai ki verify se pehle ya baad me a
    // }); //otp


    const verifiedOTP = await OTP.findOne({
      userId,
      phone, // ye puchna hai 
      verified: true,
  
    }); //otp 2 nov


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
      // country: country || "India",
      country: country,
      // isDefault: isDefault || false, ye hata bhi denge to bhi koi dikkat nhi hia kyuki hum vah default set kar rahe hai already.
      isDefault: isDefault 
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


//11 nov 2025

export async function updateAddress(req, res) {
  try {
    const userId = req.user._id;
    const { id } = req.params;
    const { fullName, phone, addressLine1, addressLine2, city, state, zipCode, country, isDefault } = req.body;

    const address = await Address.findOne({ _id: id, userId });
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    if (isDefault) {
      await Address.updateMany({ userId }, { isDefault: false });
    }

    Object.assign(address, {
      fullName,
      phone,
      addressLine1,
      addressLine2,
      city,
      state,
      zipCode,
      country,
      isDefault,
    });

    await address.save();
    res.status(200).json({ message: "Address updated successfully", address });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

export async function deleteAddress(req, res) {
  try {
    const userId = req.user._id;
    const { id } = req.params; // konsa address 

    const address = await Address.findOneAndDelete({ _id: id, userId });
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}

export async function setDefaultAddress(req, res) {
  try {
    const userId = req.user._id;
    const { id } = req.params;

    const address = await Address.findOne({ _id: id, userId });
    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    await Address.updateMany({ userId }, { isDefault: false });
    address.isDefault = true;
    await address.save();

    res.status(200).json({ message: "Default address set successfully", address });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
}
