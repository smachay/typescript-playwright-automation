import { CartItemList } from '../pageObjects/List';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  public readonly cartItemList = new CartItemList(
    this.page.locator('[data-test="cart-list"]')
  );

  public readonly checkoutButton = this.page.getByRole('button', {
    name: 'Checkout',
  });
}
