import BasePage from './base.page.js';

class CheckoutCompletePage extends BasePage {
    get successMessage() { return $('[data-test="complete-header"]'); }
}

export default new CheckoutCompletePage();
