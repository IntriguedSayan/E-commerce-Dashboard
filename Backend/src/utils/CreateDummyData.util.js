const { faker } = require("@faker-js/faker");


// Create a function using faker to generate object with transaction metrics such as sales volume, payment methods, and customer behavior.

function createTransactionMetrics() {
  const salesVolume = faker.commerce.price(100, 10000);
  const paymentMethod = faker.helpers.arrayElement([
    "credit card",
    "debit card",
    "upi",
    "cash on delivery",
  ]);
  const customerBehavior = faker.helpers.arrayElement([
    "new customer",
    "returning customer",
    "loyal customer",
  ]);

  return {
    salesVolume,
    paymentMethod,
    customerBehavior,
  };
}

function createRandomUser() {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const transactionMetrics = createTransactionMetrics();

  return {
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
    subscriptionTier: faker.helpers.arrayElement(["free", "basic", "business"]),
    ...transactionMetrics,
  };
}



module.exports = {createRandomUser};
