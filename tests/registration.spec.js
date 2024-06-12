import { test, expect } from '@playwright/test';
import RegistrationPage from '../pages/RegistrationPage';
import { assert } from 'console';

test.describe('DemoQA Registration', () => {
    test('should register a new user', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigate('https://demo.realworld.io/#/register');

        // Fill in registration form
        await registrationPage.fillRegistrationForm('testrrrrrrrr22', 'tre2strrrrrrr2@gmail.com', 'pastrrrrrrrssword123');
        
        //capctha
        //await registrationPage.solveRecaptcha();
        // Submit the registration form
        await registrationPage.submitRegistration();

        // Assertions to verify successful registration
        const elementLocator = page.locator('h1.logo-font');  // Target the h1 element

        const elementText = await elementLocator.innerText();
        expect(elementText).toBe('conduit'); // This will pass since the actual text is "conduit"
        // // Wait for the alert to appear
        // const dialog = await page.waitForEvent('dialog');

        // // Verify the alert content
        // const alertContent = dialog.message();
        // expect(alertContent).toBe('Registration successful!');

        // // Close the alert
        // await dialog.dismiss();
    });
});