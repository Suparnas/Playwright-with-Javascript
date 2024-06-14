import { th } from '@faker-js/faker';
import BasePage from './BasePage';

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.logo = '.logo-font.ng-binding';
    }
    

    async getLogoText() {
        await this.waitForVisible(this.logo);
        return await this.getText(this.logo);
    }
    
}
export default HomePage;