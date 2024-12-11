import { Button } from '../pageObjects';
import { CartItemList } from '../pageObjects/List';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  public readonly cartItemList = new CartItemList(
    this.page.locator('[data-test="cart-list"]')
  );

  public readonly checkoutButton = new Button(
    this.page.getByRole('button', {
      name: 'Checkout',
    })
  );
}
