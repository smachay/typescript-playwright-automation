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

test.describe('Inventory', async () => {
  test('purchase the single item', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const inventoryItem = await inventoryPage.itemList.getItemByIndex(0);
    const itemName = await inventoryItem.getName();
    const itemPrice = await inventoryItem.getPrice();
    await inventoryItem.click();

    // Assert that the item page loads and displays the correct item name
    const itemPage = new ItemPage(page);
    await expect(itemPage.label).toHaveText(itemName);

    // Add item to the cart
    await itemPage.changeCartStatusButton.click();

    let pageHeader = new PageHeader(page);
    await pageHeader.shoppingCartButton.click();

    // Proceed to checkout
    const cartPage = new CartPage(page);
    await cartPage.checkoutButton.click();

    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillInformationForm(
      userInfo.firstName,
      userInfo.lastName,
      userInfo.zipCode
    );
    await checkoutPage.continueButton.click();

    // Validate the shopping cart icon item count
    pageHeader = new PageHeader(page);
    await expect(pageHeader.shoppingCartButton).toHaveText('1');

    const overviewPage = new OverviewPage(page);
    const cartItem = await overviewPage.cartItemList.getItemByIndex(0);

    // Validate item details on the overview page
    await expect(cartItem.nameLabel).toHaveText(itemName);
    await expect(cartItem.priceLabel).toHaveText(itemPrice);
    await expect(cartItem.quantityLabel).toHaveText('1');
    await overviewPage.finishButton.click();

    // Complete the order
    const completePage = new CompletePage(page);
    await expect(completePage.completeLabel).toBeVisible();
  });
});
