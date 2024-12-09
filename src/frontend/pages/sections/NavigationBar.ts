import { Page } from '@playwright/test';
import { BaseSection } from './BaseSection';

export class NavigationBar extends BaseSection {
  constructor(page: Page) {
    const headerLocator = page.locator('div.bm-menu');
    super(page, headerLocator);
  }
  public readonly allItemsButton = this._section.locator(
    '[data-test="inventory-sidebar-link"]'
  );
  public readonly aboutButton = this._section.locator(
    '[data-test="about-sidebar-link"]'
  );
  public readonly logoutButton = this._section.locator(
    '[data-test="logout-sidebar-link"]'
  );
  public readonly resetAppStateButton = this._section.locator(
    '[data-test="reset-sidebar-link"]'
  );
}
