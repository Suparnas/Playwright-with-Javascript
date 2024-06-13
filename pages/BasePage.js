class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

     async waitForVisible(selector) {
    await this.page.waitForSelector(selector, { state: 'visible' });
}
}

export default BasePage;