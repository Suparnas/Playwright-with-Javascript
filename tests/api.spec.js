import { test, expect } from '@playwright/test';
import { ApiPage } from '../pages/ApiPage.js';

test.describe('ASIN Data API Tests', () => {
    let apiPage, context, page;
  
    test.beforeAll(async ({ browser }) => {
      context = await browser.newContext();
      page = await context.newPage();
      apiPage = new ApiPage(page);
    });

    test.afterAll(async () => {
        await context.close();
      });

  test('should check for API', async () => {
      await apiPage.testSuccessfulApiRequest();
    });
  });
