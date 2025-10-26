import { Schema, model } from "mongoose";

const otpSchema = new Schema({
  phone: { type: String, required: true },
  otp: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "Users", required: true },
  verified: { type: Boolean, default: false },
  expiresAt: { type: Date, required: true },
}, { timestamps: true });


otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0});

const OTP = model("OTP", otpSchema);

export default OTP;