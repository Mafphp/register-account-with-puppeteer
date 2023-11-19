const puppeteer = require("puppeteer");
const faker = require("faker");

const emailAddresses = [

];

async function registerOnMilanote(email) {
  const browser = await puppeteer.launch({
    headless: false,
    width: 1200,
    height: 800,
  });
  const page = await browser.newPage();
  try {
    // Go to the registration page
    await page.goto("https://www.milanote.com/refer/rcENcyVjli6LatY4Ny");
    // Generate random names using faker
    const randomFirstName = faker.name.firstName();
    const randomLastName = faker.name.lastName();
    const randomPassword = faker.internet.password();
    // Handle the popup button click
    await page.waitForSelector("#onetrust-accept-btn-handler");
    await page.click("#onetrust-accept-btn-handler");
    // Fill in the registration form
    await page.type("#givenName", randomFirstName);
    await page.type("#familyName", randomLastName);
    await page.type("#email", email);
    await page.type("#password", randomPassword);

    // Check the checkboxes
    await page.evaluate(() => {
      document.querySelector("#agreeToTerms").click();
    });
    await page.evaluate(() => {
      document.querySelector("#subscribeToProductUpdates").click();
    });
    // Submit the registration form
    await page.click('button[type="submit"]');

    await page.waitForNavigation();

    // // You can add additional checks if needed
    // if (page.url() === "https://app.milanote.com/onboarding/segment") {
    //   console.log("Successfully navigated to the expected URL");
    // } else {
    //   console.error("Navigation did not go to the expected URL");
    // }
    // // Wait for the registration to complete (you might need to adjust the selector)
    // await page.waitForSelector(".registration-success-message");

    console.log("Registration successful!");
  } catch (error) {
    console.error("Registration failed:", error);
  } finally {
    // Close the browser
    await browser.close();
  }
}

// Run the registration function
// Run the registration function for each email address
(async () => {
  for (const email of emailAddresses) {
    await registerOnMilanote(email);
  }
})();
