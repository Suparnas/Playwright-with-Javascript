import { expect } from '@playwright/test';
import { get } from 'axios';

export class ApiPage {
  constructor(page) {
    this.page = page;
  }

  async makeApiRequest(params) {
    try {
      const response = await get('https://api.asindataapi.com/request', { params });
      await this.page.evaluate(async (responseData) => {
        console.log(responseData);
      }, response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async testSuccessfulApiRequest() {
    const params = {
      api_key: "3857D67447AB4D949841B0AA228F7B91",
      amazon_domain: "amazon.ca",
      asin: "B073JYC4XM",
      type: "product",
      language: "en_US",
      output: "html"
    };

    const responseData = await this.makeApiRequest(params);
    // Add assertions or additional tests here
    expect(responseData).toBeTruthy();
  }
}

//export default { ApiPage };