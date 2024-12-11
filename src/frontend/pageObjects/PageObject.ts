import { Locator } from 'playwright';

export abstract class PageObject {
  constructor(public readonly element: Locator) {}
}
