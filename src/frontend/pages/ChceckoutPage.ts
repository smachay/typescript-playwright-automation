import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  public readonly firstNameInput = this.page.locator(
    'input[data-test="firstName"]'
  );
  public readonly lastNameInput = this.page.locator(
    'input[data-test="lastName"]'
  );
  public readonly postalInput = this.page.locator(
    'input[data-test="postalCode"]'
  );
  public readonly continueButton = this.page.getByRole('button', {
    name: 'Continue',
  });

  public async fillInformationForm(
    firstName: string,
    lastName: string,
    postalCode: string
  ): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalInput.fill(postalCode);
  }
}
