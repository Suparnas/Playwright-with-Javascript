// addToCart.spec.js
const { test, expect } = require('@playwright/test');
const SalePage = require('./SalePage');

test('should add a product to the cart', async ({ page }) => {
    const salePage = new SalePage(page);
    await salePage.navigate();
    await salePage.addFirstProductToCart();
    await salePage.verifyProductAddedToCart();
});