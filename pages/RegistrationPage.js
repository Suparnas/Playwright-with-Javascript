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


    }

    async fillRegistrationForm( userName, email,password) {
       // await this.page.click(this.openRegistrationFormButton);
       await this.waitForVisible(this.userName);
       await this.page.fill(this.userName, userName);
       await this.waitForVisible(this.email);
       await this.page.fill(this.email, email);
       await this.waitForVisible(this.passwordInput);
       await this.page.fill(this.passwordInput, password);
    }

    // async solveRecaptcha() {
    //     // Wait for the reCAPTCHA widget to load
    //     const recaptchaElement = await this.page.waitForSelector('iframe[title="reCAPTCHA"]', { timeout: 10000 });
      
    //     // Get the reCAPTCHA challenge
    //     const recaptchaChallenge = await this.page.solveRecaptcha(recaptchaElement, {
    //         provider: {
    //           id: 'canvas',
    //           canvas: await createCanvas(300, 200),
    //         },
    //       });
      
    //     return recaptchaChallenge;
    //   }

    async submitRegistration() {
        await this.waitForVisible(this.signUpButton);
        await this.page.click(this.signUpButton);
    }
}

export default RegistrationPage;