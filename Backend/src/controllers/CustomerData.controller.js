const { CustomerDataModel } = require("../models/CustomerData.model");

const getCustomerData = async (req, res) => {
  try {
    const data = await CustomerDataModel.find();
    return res
      .status(200)
      .json({ message: "Customer Data fetched successfully", data: data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getCustomerData,
};
