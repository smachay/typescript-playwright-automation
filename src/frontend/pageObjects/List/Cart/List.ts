import { BaseList } from '../Base/List';
import { CartItem } from './Item';

export class CartItemList extends BaseList {
  public async getItemByIndex(index: number): Promise<CartItem> {
    const itemElements = await this.element
      .locator('[data-test="inventory-item"]')
      .all();
    if (index < 0 || index >= itemElements.length) {
      throw new Error(
        `List element at index ${index} was not found. Valid indices: 0 to ${
          itemElements.length - 1
        }`
      );
    }
    const itemElement = itemElements[index];
    return new CartItem(itemElement);
  }
}
