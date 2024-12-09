import { PageObject } from '../../PageObject';

export class BaseListItem extends PageObject {
  public readonly nameLabel = this.host.locator(
    '[data-test=inventory-item-name]'
  );
  public readonly priceLabel = this.host.locator(
    '[data-test=inventory-item-price]'
  );
  public readonly changeCartStatusButton = this.host.locator(
    'div.pricebar > button'
  );

  public async click(): Promise<void> {
    await this.nameLabel.click();
  }

  public async getName(): Promise<string> {
    return (await this.nameLabel.textContent()) || '';
  }

  public async getPrice(): Promise<string> {
    return (await this.priceLabel.textContent()) || '';
  }
}
