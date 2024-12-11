import { Button, Label } from '../pageObjects';
import { BasePage } from './BasePage';

export class ItemPage extends BasePage {
  public readonly label = new Label(
    this.page.locator('[data-test=inventory-item-name]')
  );
  public readonly changeCartStatusButton = new Button(
    this.page.locator('div.inventory_details_desc_container > button')
  );
}
