import { BaseList } from '../pageObjects/List';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  public readonly itemList = new BaseList(
    this.page.locator('[data-test="inventory-list"]')
  );
}
