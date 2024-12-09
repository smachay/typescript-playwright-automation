import { Locator, Page } from '@playwright/test';
import { BasePage } from '../BasePage';

export class BaseSection extends BasePage {
  protected readonly _section: Locator;
  constructor(page: Page, section: Locator) {
    super(page);
    this._section = section;
  }
}
