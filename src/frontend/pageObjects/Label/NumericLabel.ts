import { PageObject } from '../PageObject';

export class NumericLabel extends PageObject {
  async getValue(): Promise<number> {
    const text = await this.element.textContent();
    return text ? parseFloat(text) : 0;
  }
}
