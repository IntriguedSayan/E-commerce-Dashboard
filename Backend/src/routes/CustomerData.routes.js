const { Router } = require("express");
const { getCustomerData } = require("../controllers/CustomerData.controller");

const customerDataRouter = Router();

customerDataRouter.get("/", getCustomerData);

module.exports = { customerDataRouter };
