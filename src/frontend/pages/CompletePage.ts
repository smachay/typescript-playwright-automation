import { BasePage } from './BasePage';

export class CompletePage extends BasePage {
  public readonly completeLabel = this.page.getByRole('heading', {
    name: 'Thank you for your order!',
  });
}
