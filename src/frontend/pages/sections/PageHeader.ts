import { Page } from '@playwright/test';
import { BaseSection } from './BaseSection';
import { Button, ClickableCounterIcon } from '@/frontend/pageObjects';

export class PageHeader extends BaseSection {
  constructor(page: Page) {
    const headerLocator = page.locator('div[data-test="primary-header"]');
    super(page, headerLocator);
  }

  public readonly hamburgerMenuButton = new Button(
    this._section.locator('button[id="react-burger-menu-btn"]')
  );
  public readonly shoppingCartButton = new ClickableCounterIcon(
    this._section.locator('a[data-test="shopping-cart-link"]')
  );
}
