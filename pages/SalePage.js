import BasePage from './BasePage';

class SalePage {
    constructor(page) {
        this.page = page;
        this.productListSelector = '.product-items .item';
        this.addToCartButtonSelector = 'button[title="Add to Cart"]';
    }

    async navigate() {
        await this.page.goto('https://ecommerce.tealiumdemo.com/sale.html');
    }

    async addFirstProductToCart() {
        const firstProduct = await this.page.$(this.productListSelector);
        const addToCartButton = await firstProduct.$(this.addToCartButtonSelector);
        await addToCartButton.click();
    }

    async verifyProductAddedToCart() {
        await this.page.waitForSelector('.message-success');
        const successMessage = await this.page.$('.message-success');
        expect(successMessage).not.toBeNull();
    }
}

export default SalePage;