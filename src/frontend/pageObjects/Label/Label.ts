import { PageObject } from '../PageObject';

export class Label extends PageObject {
  async getText(): Promise<string> {
    return (await this.element.textContent()) || '';
  }
}

export class ClickableLabel extends Label {
  async click(): Promise<void> {
    await this.element.click();
  }
}
