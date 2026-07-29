import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import { loginCases } from '../data/users.js';

describe('UC-2: Data-driven login', () => {
    for (const testCase of loginCases) {
        it(`should handle login for ${testCase.username}`, async () => {
            await loginPage.open();
            await loginPage.login(testCase.username, testCase.password);

            if (testCase.expected.success) {
                await expect(inventoryPage.title).toHaveText('Products');
                return;
            }

            await expect(loginPage.errorMessage)
                .toHaveText(testCase.expected.errorMessage);
        });
    }
});
