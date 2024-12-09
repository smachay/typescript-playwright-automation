import { BaseList } from '../Base/List';
import { CartItem } from './Item';

export class CartItemList extends BaseList {
  public async getItemByIndex(index: number): Promise<CartItem> {
    const itemHosts = await this.host
      .locator('[data-test="inventory-item"]')
      .all();
    if (index < 0 || index >= itemHosts.length) {
      throw new Error(
        `List element at index ${index} was not found. Valid indices: 0 to ${
          itemHosts.length - 1
        }`
      );
    }
    const itemHost = itemHosts[index];
    return new CartItem(itemHost);
  }
}
