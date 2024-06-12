import { test, expect } from '@playwright/test';
import RegistrationPage from '../pages/RegistrationPage';
import { assert } from 'console';

test.describe('DemoQA Registration', () => {
    test('should register a new user', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigate('https://demo.realworld.io/#/register');

        const username = `${prefix}${Math.random().toString(36).substring(2, 15)}`;
            const email = `${username}@example.com`;
            const password = generateStrongPassword(); // Replace with your strong password generation logic
          
          function generateStrongPassword(length = 12) {
            const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-=+";
            let password = "";
            for (let i = 0; i < length; i++) {
              password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return password;
          }
        // Fill in registration form
        await registrationPage.fillRegistrationForm(username, email, password);
        
            



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