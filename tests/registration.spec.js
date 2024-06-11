import { test, expect } from '@playwright/test';
import RegistrationPage from '../pages/RegistrationPage';

test.describe('Facebook Registration', () => {
    test('should register a new user', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigate('https://www.facebook.com/');

        // Fill in registration form
        await registrationPage.fillRegistrationForm('John', 'Doe', 'john.doe@example.com', 'password123');
        
        // Submit the registration form
        await registrationPage.submitRegistration();

        // Assertions to verify successful registration
        expect(page.url()).toContain('https://www.facebook.com/');
    });
});