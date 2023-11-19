const axios = require("axios");
const faker = require("faker");

const emailAddresses = [
  "bvdbz@telegmail.com",
//   "itprnvm@telegmail.com",
//   "tbbcfng@telegmail.com",
//   "lexfw@telegmail.com",
//   "cjginsg@telegmail.com",
//   "syfgxet@telegmail.com",
//   "jqwek@telegmail.com",
//   "zxiwvoys@telegmail.com",
//   "asbsjsbdksk@telegmail.com",
//   "aqykdyog@telegmail.com",
//   "jdjmncay@telegmail.com",
//   "mmdiqasasqwqw@telegmail.com",
//   "msbdkdbdiwjdj@telegmail.com",
//   "mhdplm@hi2.in",
//   "djrgac@telegmail.com",
//   "fjzliw@telegmail.com",
//   "qvbajn@telegmail.com",
//   "gzpjdo@telegmail.com",
//   "jlkiekxa@telegmail.com",
//   "osodueri@telegmail.com",
//   "hptnofa@telegmail.com",
];

function generateRandomRegistrationData(email) {
  return {
    agreeToTerms: true,
    email: email,
    familyName: faker.name.lastName(),
    givenName: faker.name.firstName(),
    marketingReferralCode: "rcEMT4eXpdY4lJHsw3", // Assuming this remains constant
    password: faker.internet.password(),
    referrerCode: "rcEMT4eXpdY4lJHsw3", // Assuming this remains constant
    registrationAvenue: "referral", // Assuming this remains constant
    subscribeToProductUpdates: true,
    utm: {},
  };
}

async function registerUser(data) {
  try {
    const response = await axios.post(
      "https://app.milanote.com/api/auth/register",
      data
    );
    console.log("Registration successful:", response.data);
  } catch (error) {
    console.error(
      "Error registering user:",
      error.response ? error.response.data : error.message
    );
  }
}

(async () => {
  for (const email of emailAddresses) {
    const dynamicRegistrationData = generateRandomRegistrationData(email);

    // Call the function with the dynamic registration data
    const result = await registerUser(dynamicRegistrationData);
    console.log(result);
  }
})();
