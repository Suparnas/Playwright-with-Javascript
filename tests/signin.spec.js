import { test , expect } from '@playwright/test';
import SignInPage from '../pages/SignInPage';

test.describe('Facebook Sign In', () => {
    test('should sign in an existing user', async ({ page }) => {
        const signInPage = new SignInPage(page);
        await signInPage.navigate('https://www.saucedemo.com/');

        // Fill in sign-in form
        await signInPage.fillSignInForm('standard_user', 'secret_sauce');
        
        // Submit the sign-in form
        await signInPage.submitSignIn();

        // Assertions to verify successful sign-in
        expect(page.url()).toContain('https://www.saucedemo.com/inventory.html');
    });
});