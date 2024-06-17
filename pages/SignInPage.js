import BasePage from './BasePage';

class SignInPage extends BasePage {
    constructor(page) {
        super(page);
        this.userNameInput = '#user-name';
        this.passwordInput = '#password';
        this.signinButton = '#login-button'; 

        this.userName = 'input[placeholder="Username"]';
        this.email = 'input[placeholder="Email"]';
        this.passwordI = 'input[placeholder="Password"]';
        this.loginButton = 'button[type="submit"]';
    }
    

    async fillSignInForm(userName, password) {
        await this.waitForVisible(this.userNameInput);
        await this.page.fill(this.userNameInput, userName);
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