import { PageObject } from '../../PageObject';
import { BaseListItem } from './Item';

export class BaseList extends PageObject {
  public getItemByName(itemName: string): BaseListItem {
    const itemHost = this.host.filter({ hasText: `${itemName}` }).nth(1);
    return new BaseListItem(itemHost);
  }

  public async getItemByIndex(index: number): Promise<BaseListItem> {
    const itemLocator = this.host.locator('[data-test="inventory-item"]');
    const itemCount = await itemLocator.count();

    if (index < 0 || index >= itemCount) {
      throw new Error(
        `List element at index ${index} was not found. Valid indices: 0 to ${
          itemCount - 1
        }`
      );
    }

    return new BaseListItem(itemLocator.nth(index));
  }
}
