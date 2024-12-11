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
    const pageHeader = new PageHeader(page);

    // Capture the initial number of items in the cart
    const cartCountBefore =
      await pageHeader.shoppingCartButton.getCounterValue();

    // Navigate to the inventory page and select the first item
    const inventoryPage = new InventoryPage(page);
    const inventoryItem = await inventoryPage.itemList.getItemByIndex(0);
    const itemName = await inventoryItem.nameLabel.getText();
    const itemPrice = await inventoryItem.priceLabel.getText();
    await inventoryItem.nameLabel.click();

    // Ensure the correct item page is displayed
    const itemPage = new ItemPage(page);
    await expect(itemPage.label.element).toHaveText(itemName);

    // Add the item to the cart
    await itemPage.changeCartStatusButton.click();

    // Navigate to the cart page
    await pageHeader.shoppingCartButton.click();
    const cartPage = new CartPage(page);
    await cartPage.checkoutButton.click();

    // Fill out the checkout form with user information
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillInformationForm(
      userInfo.firstName,
      userInfo.lastName,
      userInfo.zipCode
    );
    await checkoutPage.continueButton.click();

    // Validate that the cart count has been updated after adding an item
    const cartCountAfter =
      await pageHeader.shoppingCartButton.getCounterValue();
    expect(cartCountAfter).toBe(cartCountBefore + 1);

    // Validate item details in the overview before completing the order
    const overviewPage = new OverviewPage(page);
    const cartItem = await overviewPage.cartItemList.getItemByIndex(0);
    await expect(cartItem.nameLabel.element).toHaveText(itemName);
    await expect(cartItem.priceLabel.element).toHaveText(itemPrice);

    // Ensure the correct item quantity is displayed
    const cartItemQuantity = await cartItem.quantityLabel.getValue();
    expect(cartItemQuantity).toBe(1);

    // Complete the order and check that the confirmation page is visible
    await overviewPage.finishButton.click();
    const completePage = new CompletePage(page);
    await expect(completePage.completeLabel.element).toBeVisible();
  });
});
