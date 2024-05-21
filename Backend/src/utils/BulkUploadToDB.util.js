
const { CustomerDataModel } = require("../models/CustomerData.model.js");
const { createRandomUser } = require("./CreateDummyData.util.js");
const fs = require("fs")

const generateCustomerArray = () => {
  const customers = [];

  for (let i = 0; i < 100; i++) {
    customers.push(createRandomUser());
  }

  return customers;
};

async function insertCustomers() {
  const customers = generateCustomerArray();
  console.log(customers);
  try {
    await CustomerDataModel.insertMany(customers);
    // fs.writeFileSync("./data.json", JSON.stringify(customers));
    console.log("Customers Inserted successfully");
  } catch (err) {
    console.error("Error while inserting customers",err.message);
  }
}

insertCustomers();
