const { test, expect } = require('@playwright/test');
const RegistrationPage = require('../pages/RegistrationPage');

test.describe('Facebook Registration', () => {
    test('should register a new user', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigate('https://www.facebook.com/');

        // Fill in registration form
        await registrationPage.fillRegistrationForm('John', 'Doe', 'john.doe@example.com', 'password123');
        
        // Submit the registration form
        await registrationPage.submitRegistration();

        // Add assertions to verify successful registration
        // Example: expect(page.url()).toContain('confirmation');
    });
});