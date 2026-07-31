import BasePage from './base.page.js';
import { hasItem } from '../helpers/item.helper.js';

class CheckoutOverviewPage extends BasePage {
    get finishButton() { return $('#finish'); }
    get itemNames() { return $$('[data-test="inventory-item-name"]'); }

    async hasItem(productName) {
        return hasItem(await this.itemNames, productName);
    }

    async finishCheckout() {
        await this.finishButton.click();
    }
}

export default new CheckoutOverviewPage();
