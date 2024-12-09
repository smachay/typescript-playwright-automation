import { CartItemList } from '../pageObjects/List';
import { BasePage } from './BasePage';

export class OverviewPage extends BasePage {
  public readonly cartItemList = new CartItemList(
    this.page.locator('[data-test="cart-list"]')
  );
  public readonly finishButton = this.page.getByRole('button', {
    name: 'Finish',
  });
}
