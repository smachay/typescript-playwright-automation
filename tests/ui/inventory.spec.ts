import { expect, test } from '@/frontend/fixtures/setup';
import {
  CartPage,
  CheckoutPage,
  CompletePage,
  InventoryPage,
  OverviewPage,
} from '@/frontend/pages';
import { ItemPage } from '@/frontend/pages/ItemPage';
import { PageHeader } from '@/frontend/pages/sections';

const userInfo = {
  firstName: 'John',
  lastName: 'Doe',
  zipCode: '12-345',
};

test.describe('Inventory', () => {
  test('purchase the single item', async ({ page }) => {
    let pageHeader = new PageHeader(page);
    const initialCartCount = await pageHeader.getCartItemCount();

    // Navigate to inventory and select an item
    const inventoryPage = new InventoryPage(page);
    const inventoryItem = await inventoryPage.itemList.getItemByIndex(0);
    const itemName = await inventoryItem.getName();
    const itemPrice = await inventoryItem.getPrice();
    await inventoryItem.click();

    // Validate item page and add to cart
    const itemPage = new ItemPage(page);
    await expect(itemPage.label).toHaveText(itemName);
    await itemPage.changeCartStatusButton.click();

    // Navigate to the cart and checkout
    pageHeader = new PageHeader(page);
    await pageHeader.shoppingCartButton.click();

    const cartPage = new CartPage(page);
    await cartPage.checkoutButton.click();

    // Fill out checkout form and continue
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillInformationForm(
      userInfo.firstName,
      userInfo.lastName,
      userInfo.zipCode
    );
    await checkoutPage.continueButton.click();

    // Validate shopping cart icon item count
    const finalCartCount = await pageHeader.getCartItemCount();
    expect(finalCartCount).toBe(initialCartCount + 1);

    // Validate item details on the overview page
    const overviewPage = new OverviewPage(page);
    const cartItem = await overviewPage.cartItemList.getItemByIndex(0);
    await expect(cartItem.nameLabel).toHaveText(itemName);
    await expect(cartItem.priceLabel).toHaveText(itemPrice);

    const cartItemQuantity = await cartItem.getQuantity();
    expect(cartItemQuantity).toBe(1);

    await overviewPage.finishButton.click();

    // Validate order completion
    const completePage = new CompletePage(page);
    await expect(completePage.completeLabel).toBeVisible();
  });
});
