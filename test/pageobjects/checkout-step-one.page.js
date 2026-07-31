import BasePage from './base.page.js';
import logger from '../loggers/logger.js';

class CheckoutStepOnePage extends BasePage {
    get firstNameInput() { return $('#first-name'); }
    get lastNameInput() { return $('#last-name'); }
    get postalCodeInput() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }

    async submitCustomerInformation({ firstName, lastName, postalCode }) {
        logger.info(`Set '${firstName}' into firstName`);
        await this.firstNameInput.setValue(firstName);
        logger.info(`Set '${lastName}' into lastName`);
        await this.lastNameInput.setValue(lastName);
        logger.info(`Set '${postalCode}' into postalCode`);
        await this.postalCodeInput.setValue(postalCode);
        await this.continueButton.click();
    }
}

export default new CheckoutStepOnePage();
