import { NumericLabel } from '../../Label/NumericLabel';
import { BaseListItem } from '../Base/Item';

export class CartItem extends BaseListItem {
  public readonly quantityLabel = new NumericLabel(
    this.element.locator('[data-test="item-quantity"]')
  );
}
