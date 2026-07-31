# SauceDemo WebdriverIO E2E Tests

End-to-end tests for [SauceDemo](https://www.saucedemo.com/) using WebdriverIO, Mocha, Page Object Model, CSS selectors, Chrome, Firefox, parallel execution, and Allure reporting.

## Covered scenarios

### UC-1 Checkout Flow

- Login with standard_user.
- Add a specific product to the cart (parametrize the product name, e.g., "Sauce Labs Backpack").
- Navigate to the Cart and validate the item is present.
- Proceed to Checkout.
- Fill in the Information form (First Name, Last Name, Zip).
- Complete the checkout and validate the success message: "Thank you for your order!".

### UC-2 Data Driven Login:

Use a Data Provider to test login with:
1. standard_user (Should pass).
2. locked_out_user (Should fail with specific error message).

### Technical Requirements:

Tool: WebDriverIO.
Browsers: Chrome, Firefox (Run in Parallel).
Pattern: Page Object Model (POM).
Locators: CSS Selectors.
Reporting: Generate an Allure Report (or similar HTML report) for the test run.
Documentation: Add a README.md explaining how to run the tests and generate the report.

## Install:
npm install

## Run tests:
npm test

Chrome and Firefox are configured as separate capabilities. `maxInstances: 2` allows them to run in parallel.

## Generate and open Allure report:
npm run report

Failed tests automatically attach a screenshot to the Allure results.

## Clean generated reports:
npm run clean


## Improvements
- Extracted duplicated hasItem logic into reusable helper.
- Moved product and customer data into data files.
- Added simple logger example for field input.
