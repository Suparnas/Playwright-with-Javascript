import BasePage from "./BasePage";
import { createCanvas } from 'canvas';

class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
       // this.openRegistrationFormButton = '[data-testid="open-registration-form-button"]';
        this.userName = 'input[placeholder="Username"]';
        this.email = 'input[placeholder="Email"]';
        this.passwordInput = 'input[placeholder="Password"]';
        this.signUpButton = 'button[type="submit"]';
        this.error = 'li.ng-binding.ng-scope:has-text("email has already been taken")';
    }

    async fillRegistrationForm(userName, email,password) {
       // await this.page.click(this.openRegistrationFormButton);
       await this.waitForVisible(this.userName);
       await this.page.fill(this.userName, userName);
       await this.waitForVisible(this.email);
       await this.page.fill(this.email, email);
       await this.waitForVisible(this.passwordInput);
       await this.page.fill(this.passwordInput, password);
    }

    async submitRegistration() {
        await this.waitForVisible(this.signUpButton);
        await this.page.click(this.signUpButton);
    }

    async errortext() {
        const errorLocator = this.page.locator(this.error);
        const firstError = await errorLocator.first();
        console.log(await firstError.textContent());
        return firstError.textContent();
    }
}

export default RegistrationPage;