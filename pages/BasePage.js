class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

     async waitForVisible(selector) {
        await this.page.waitForSelector(selector, {state: 'visible', timeout: 20000});
    }

      async getText(selector) {
        return await this.page.textContent(selector); 
    }
}

export default BasePage;