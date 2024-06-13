import BasePage from './BasePage';

class SignInPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailInput = '#email';
        this.passwordInput = '#pass';
        this.signinButton = '[data-testid="royal_login_button"]'; 

        this.userName = 'input[placeholder="Username"]';
        this.email = 'input[placeholder="Email"]';
        this.passwordI = 'input[placeholder="Password"]';
        this.loginButton = 'button[type="submit"]';
    }
    

    async fillSignInForm(email, password) {
        await this.waitForVisible(this.emailInput);
        await this.page.fill(this.emailInput, email);
        await this.waitForVisible(this.passwordInput);
        await this.page.fill(this.passwordInput, password);
    }
    async submitSignIn() {
        await this.waitForVisible(this.signinButton);
        await this.page.click(this.signinButton);
    }

    async fillLoginForm(email, password) {
        await this.waitForVisible(this.email);
        await this.page.fill(this.email, email);
        await this.waitForVisible(this.passwordI);
        await this.page.fill(this.passwordI, password);
    }

    async submitLogin() {
        await this.waitForVisible(this.loginButton);
        await this.page.click(this.loginButton);
    }

}
export default SignInPage;