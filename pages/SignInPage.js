import BasePage from './BasePage';

class SignInPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailInput = '#email';
        this.passwordInput = '#pass';
        this.loginButton = '[data-testid="royal_login_button"]'; 
    }

    async fillSignInForm(email, password) {
        await this.page.fill(this.emailInput, email);
        await this.page.fill(this.passwordInput, password);
    }

    async submitSignIn() {
        await this.page.click(this.loginButton);
    }
}
export default SignInPage;