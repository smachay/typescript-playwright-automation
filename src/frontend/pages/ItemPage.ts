import { BasePage } from './BasePage';

export class ItemPage extends BasePage {
  public readonly label = this.page.locator('[data-test=inventory-item-name]');
  public readonly changeCartStatusButton = this.page.locator(
    'div.inventory_details_desc_container > button'
  );
}
