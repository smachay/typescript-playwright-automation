import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  public readonly logo = this.page.locator('div.login_logo');
  public readonly userNameInput = this.page.locator(
    'input[data-test="username"]'
  );
  public readonly passwordInput = this.page.locator(
    'input[data-test="password"]'
  );
  public readonly loginButton = this.page.locator(
    'input[data-test="login-button"]'
  );

  async logIn(userName: string, password: string): Promise<void> {
    await this.userNameInput.fill(userName);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
