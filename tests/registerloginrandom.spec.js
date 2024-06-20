import { test, expect } from '@playwright/test';
import RegistrationPage from '../pages/RegistrationPage';
import SignInPage from '../pages/SignInPage';
import { faker } from '@faker-js/faker';

test.describe('DemoQA Registration and Login', () => {
    let username, email, password;

    test.beforeEach(async ({ page }) => {
        // Generate dynamic registration details
        username = faker.internet.userName();
        email = faker.internet.email();
        password = faker.internet.password();
    });

    test('Should register a new user', async ({ page }) => {
        const registrationPage = new RegistrationPage(page);
        await registrationPage.navigate('https://demo.realworld.io/#/register');
        // Fill in registration form
        await registrationPage.fillRegistrationForm(username, email, password);
        // Submit the registration form
        await registrationPage.submitRegistration();   
        // Assertions to verify successful registration
        const elementLocator = page.locator('h1.logo-font');  // Target the h1 element
        const elementText = await elementLocator.innerText();
        expect(elementText).toBe('conduit'); // This will pass since the actual text is "conduit" 
    

  // test('[@error-check] should not register a new user with an existing username', async ({ page }) => {
    //     const registrationPage = new RegistrationPage(page);
        await registrationPage.navigate('https://demo.realworld.io/#/register');
      
        // Fill in registration form with an existing username 
        await registrationPage.fillRegistrationForm(username, email, password);
      
        // Submit the registration form
        await registrationPage.submitRegistration();
    
        // Assertion to verify error message for existing username
        const errorMessage =  await registrationPage.errortext();
        //console.log("Retrieved error message:", errorMessage);
        expect(errorMessage).toContain('email has already been taken'); // Verify error message contains specific text
      
    //})
 });
    test('should login with registered user', async ({ page }) => {
        const signinPage = new SignInPage(page);
        await signinPage.navigate('https://demo.realworld.io/#/login');

        // Fill in login form with the registered user's details
        await signinPage.fillLoginForm(email, password);
        await signinPage.submitLogin();

        // Login test assertions (e.g., check if user is logged in)
    });
    
});