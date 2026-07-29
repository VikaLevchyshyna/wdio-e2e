import BasePage from './base.page.js';

class InventoryPage extends BasePage {
    get title() { return $('[data-test="title"]'); }
    get cartLink() { return $('[data-test="shopping-cart-link"]'); }
    get productCards() { return $$('[data-test="inventory-item"]'); }

    async findProductCard(productName) {
        const cards = await this.productCards;

        for (const card of cards) {
            const name = await card.$('[data-test="inventory-item-name"]').getText();
            if (name === productName) {
                return card;
            }
        }

        throw new Error(`Product not found: ${productName}`);
    }

    async addProductToCart(productName) {
        const card = await this.findProductCard(productName);
        await card.$('button').click();
    }

    async openCart() {
        await this.cartLink.click();
    }
}

export default new InventoryPage();
