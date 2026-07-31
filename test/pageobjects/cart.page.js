import BasePage from './base.page.js';
import { hasItem } from '../helpers/item.helper.js';

class CartPage extends BasePage {
    get checkoutButton() { return $('#checkout'); }
    get itemNames() { return $$('[data-test="inventory-item-name"]'); }

    async hasItem(productName) {
        return hasItem(await this.itemNames, productName);
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

export default new CartPage();
