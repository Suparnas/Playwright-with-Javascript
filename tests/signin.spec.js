const { test, expect } = require('@playwright/test');
const SignInPage = require('../pages/SignInPage');

test.describe('Facebook Sign In', () => {
    test('should sign in an existing user', async ({ page }) => {
        const signInPage = new SignInPage(page);
        await signInPage.navigate('https://www.facebook.com/');

        // Fill in sign-in form
        await signInPage.fillSignInForm('existing_user@example.com', 'password123');
        
        // Submit the sign-in form
        await signInPage.submitSignIn();

        // Add assertions to verify successful sign-in
        // Example: expect(page.url()).toContain('home');
    });
});