import { PageObject } from './PageObject';

export class Button extends PageObject {
  async click(): Promise<void> {
    await this.element.click();
  }

  async getText(): Promise<string> {
    return (await this.element.textContent()) || '';
  }
}
