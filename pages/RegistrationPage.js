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
        //this.error = 'ul.error-messages';
        this.error = '//ul[@class="error-messages"]/li';
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

        //return await this.getInnerText(this.error);       //return await this.getText(this.error);
       await this.page.waitForSelector('xpath=//ul[class="error-messages"]/li');
        console.log( await this.getText('xpath=//ul[class="error-messages"]/li'));
       // return await this.getText(test);   
      // const errorElement = await this.page.locator("//ul[@class='error-messages']//li").nth(0);

      // const elements = await  this.getText(firstError);
       //console.log(firstError);
       
    }
}

export default RegistrationPage;