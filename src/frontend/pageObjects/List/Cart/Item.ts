import { BaseListItem } from '../Base/Item';

export class CartItem extends BaseListItem {
  public readonly quantityLabel = this.host.locator(
    '[data-test="item-quantity"]'
  );

  public async getQuantity(): Promise<number> {
    return parseInt((await this.quantityLabel.textContent()) || '0');
  }
}
