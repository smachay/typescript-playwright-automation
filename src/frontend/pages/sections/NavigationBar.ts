import { Page } from '@playwright/test';
import { BaseSection } from './BaseSection';
import { Button } from '@/frontend/pageObjects';

export class NavigationBar extends BaseSection {
  constructor(page: Page) {
    const headerLocator = page.locator('div.bm-menu');
    super(page, headerLocator);
  }
  public readonly allItemsButton = new Button(
    this._section.locator('[data-test="inventory-sidebar-link"]')
  );
  public readonly aboutButton = new Button(
    this._section.locator('[data-test="about-sidebar-link"]')
  );
  public readonly logoutButton = new Button(
    this._section.locator('[data-test="logout-sidebar-link"]')
  );
  public readonly resetAppStateButton = new Button(
    this._section.locator('[data-test="reset-sidebar-link"]')
  );
}
