import BasePage from './base.page.js';

class CartPage extends BasePage {
    get checkoutButton() { return $('#checkout'); }
    get itemNames() { return $$('[data-test="inventory-item-name"]'); }

    async hasItem(productName) {
        const items = await this.itemNames;
        const names = await Promise.all(items.map((item) => item.getText()));
        return names.includes(productName);
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

export default new CartPage();
