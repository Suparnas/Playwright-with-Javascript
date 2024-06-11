import BasePage from "./BasePage";

class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
        this.openRegistrationFormButton = '[data-testid="open-registration-form-button"]';
        this.firstNameInput = 'input[name="firstname"]';
        this.lastNameInput = 'input[name="lastname"]';
        this.emailInput = 'input[name="reg_email__"]';
        this.passwordInput = 'input[name="reg_passwd__"]';
        this.signUpButton = 'button[name="websubmit"]';
    }

    async fillRegistrationForm(firstName, lastName, email, password) {
        await this.page.click(this.openRegistrationFormButton);
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
    }

    async submitRegistration() {
        await this.page.click(this.signUpButton);
    }
}

export default RegistrationPage;