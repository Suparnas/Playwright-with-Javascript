Run all the tests
npx playwright test

Run a single test file
npx playwright test tests/todo-single.spec.ts

Run multiple tests
npx playwright test tests/todo-page/ tests/landing-page/
Run tests in headed mode
npx playwright test --headed

Run tests on Specific browser
npx playwright test --browser "chromium"

Retry failed test
npx playwright test --retries 2

The page class provides the locator function.

page.getByText() : Find the element that matches the given text
page.getByRole(): Find the element that matches the role attribute
page.getByLabel(): Find the element that matches the label
page.getByTestId(): Find the element that matches the data-testid attribute
page.getByTitle(): Find the element that matches the title attribute
page.locator(<css> or <xpath>): Find the element by using the CSS or XPath

Different types of text selectors available in Playwright
Text-based locators in Playwright are a unique feature, that helps to locate the element which is having specific text

locator.(<some_text) : Matches the element that has passed text

 Ex: await page.locator('text=Home menu')

:text-is(): this can be used inside the CSS selector, which will perform the exact match before finding the elements

Ex: await page.locator('#nav-bar :text-is("Home")')


:has-text(): This is another pseudo-class, which matches the element which contains the passed text.

Example: await page.locator(':has-text("Playwright")')

=========================================================

Install faker library for random user generation

npm install @faker-js/faker