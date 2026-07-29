import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutStepOnePage from '../pageobjects/checkout-step-one.page.js';
import checkoutOverviewPage from '../pageobjects/checkout-overview.page.js';
import checkoutCompletePage from '../pageobjects/checkout-complete.page.js';
import { STANDARD_PASSWORD } from '../data/users.js';

const productName = process.env.PRODUCT_NAME || 'Sauce Labs Backpack';

describe('UC-1: Checkout flow', () => {
    it(`should complete checkout for "${productName}"`, async () => {
        await loginPage.open();
        await loginPage.login('standard_user', STANDARD_PASSWORD);

        await expect(inventoryPage.title).toHaveText('Products');

        await inventoryPage.addProductToCart(productName);
        await inventoryPage.openCart();

        await expect(await cartPage.hasItem(productName)).toBe(true);
        await cartPage.proceedToCheckout();

        await checkoutStepOnePage.submitCustomerInformation({
            firstName: 'John',
            lastName: 'Doe',
            postalCode: '01001'
        });

        await expect(await checkoutOverviewPage.hasItem(productName)).toBe(true);
        await checkoutOverviewPage.finishCheckout();

        await expect(checkoutCompletePage.successMessage)
            .toHaveText('Thank you for your order!');
    });
});
