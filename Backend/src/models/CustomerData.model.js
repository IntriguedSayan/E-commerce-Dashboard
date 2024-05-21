const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  avatar: { type: String, required: true },
  birthday: { type: String, required: true },
  email: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  sex: { type: String, required: true },
  subscriptionTier: {
    type: String,
    required: true,
    enum: ["free", "basic", "business"],
  },
  salesVolume: { type: String, required: true },
  paymentMethod: {
    type: String,
    required: true,
    enum: ["credit card", "debit card", "upi", "cash on delivery"],
  },
  customerBehavior: {
    type: String,
    required: true,
    enum: ["new customer", "returning customer", "loyal customer"],
  },
});

const CustomerDataModel = mongoose.model("customerdata", userSchema);

module.exports = {CustomerDataModel};
