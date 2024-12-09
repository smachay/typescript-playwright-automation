import { test as base, Page } from '@playwright/test';
import { baseURL, userName, userPassword } from '../config';
import { LoginPage } from '../pages';

export const test = base.extend<{
  page: Page;
}>({
  page: async ({ page }, use) => {
    await page.goto(baseURL);
    const loginPage = new LoginPage(page);
    await loginPage.logIn(userName, userPassword);

    await use(page);
  },
});

export { expect } from '@playwright/test';
