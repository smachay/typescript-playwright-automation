import { Button } from '../../Button';
import { ClickableLabel, Label } from '../../Label/Label';
import { PageObject } from '../../PageObject';

export class BaseListItem extends PageObject {
  public readonly nameLabel = new ClickableLabel(
    this.element.locator('[data-test=inventory-item-name]')
  );
  public readonly priceLabel = new Label(
    this.element.locator('[data-test=inventory-item-price]')
  );
  public readonly changeCartStatusButton = new Button(
    this.element.locator('div.pricebar > button')
  );

  public async click(): Promise<void> {
    await this.element.click();
  }
}
