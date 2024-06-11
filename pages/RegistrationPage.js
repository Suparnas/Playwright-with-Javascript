class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
        this.firstNameInput = '#u_0_n';
        this.lastNameInput = '#u_0_p';
        this.emailInput = '#u_0_s';
        this.passwordInput = '#u_0_y';
        this.signUpButton = '#u_0_13';
    }

    async fillRegistrationForm(firstName, lastName, email, password) {
        await this.page.fill(this.firstNameInput, firstName);
        await this.page.fill(this.lastNameInput, lastName);
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
    }

    async submitRegistration() {
        await this.page.click(this.signUpButton);
    }
}

module.exports = RegistrationPage;