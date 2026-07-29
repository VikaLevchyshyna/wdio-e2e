import BasePage from './base.page.js';

class CheckoutOverviewPage extends BasePage {
    get finishButton() { return $('#finish'); }
    get itemNames() { return $$('[data-test="inventory-item-name"]'); }

    async hasItem(productName) {
        const items = await this.itemNames;
        const names = await Promise.all(items.map((item) => item.getText()));
        return names.includes(productName);
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}

export default new CheckoutOverviewPage();
