import { expect, test } from '@/frontend/fixtures/setup';
import { LoginPage } from '@/frontend/pages';
import { NavigationBar, PageHeader } from '@/frontend/pages/sections';

test.describe('Log out', () => {
  test('log out the user', async ({ page }) => {
    const pageHeader = new PageHeader(page);
    await pageHeader.hamburgerMenuButton.click();

    const navigationBar = new NavigationBar(page);
    await navigationBar.logoutButton.click();

    const loginPage = new LoginPage(page);
    await expect(loginPage.logo.element).toBeVisible();
  });
});
