import { PageObject } from './PageObject';

export class ClickableCounterIcon extends PageObject {
  async click(): Promise<void> {
    await this.element.click();
  }

  async getCounterValue(): Promise<number> {
    const text = await this.element.textContent();
    return text ? parseInt(text, 10) : 0;
  }
}
