import { Label } from '../pageObjects';
import { BasePage } from './BasePage';

export class CompletePage extends BasePage {
  public readonly completeLabel = new Label(
    this.page.getByRole('heading', {
      name: 'Thank you for your order!',
    })
  );
}
