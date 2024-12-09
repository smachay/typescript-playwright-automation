import { Page } from '@playwright/test';
import { BaseSection } from './BaseSection';

export class PageHeader extends BaseSection {
  constructor(page: Page) {
    const headerLocator = page.locator('div[data-test="primary-header"]');
    super(page, headerLocator);
  }

  public readonly hamburgerMenuButton = this._section.locator(
    'button[id="react-burger-menu-btn"]'
  );
  public readonly shoppingCartButton = this._section.locator(
    'a[data-test="shopping-cart-link"]'
  );

  public async getCartItemCount(): Promise<number> {
    return parseInt((await this.shoppingCartButton.textContent()) || '0');
  }
}
