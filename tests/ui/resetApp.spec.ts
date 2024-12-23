import { expect, test } from '@/frontend/fixtures/setup';
import { InventoryPage } from '@/frontend/pages';
import { NavigationBar, PageHeader } from '@/frontend/pages/sections';

test.describe('Reset state functionality', () => {
  test('reset the application state', async ({ page }) => {
    // Initialize inventory page
    let inventoryPage = new InventoryPage(page);
    let item = await inventoryPage.itemList.getItemByIndex(0);
    const itemName = await item.nameLabel.getText();

    // Add the first item to the cart
    await item.changeCartStatusButton.click();
    await expect(item.changeCartStatusButton.element).toHaveText('Remove');

    // Get the cart item count before clearing
    let pageHeader = new PageHeader(page);
    const cartCountBeforeClear =
      await pageHeader.shoppingCartButton.getCounterValue();
    expect(cartCountBeforeClear).toBeGreaterThan(0); // Ensure cart is not empty

    // Open hamburger menu and reset application state
    await pageHeader.hamburgerMenuButton.click();
    const navigationBar = new NavigationBar(page);
    await navigationBar.resetAppStateButton.click();

    // Get the cart item count after clearing
    pageHeader = new PageHeader(page);
    const cartCountAfterClear =
      await pageHeader.shoppingCartButton.getCounterValue();
    expect(cartCountAfterClear).toBe(0); // Ensure cart is empty

    // Validate item state after reset
    inventoryPage = new InventoryPage(page);
    item = inventoryPage.itemList.getItemByName(itemName);
    await expect(item.changeCartStatusButton.element).toHaveText('Add to cart');
  });
});
