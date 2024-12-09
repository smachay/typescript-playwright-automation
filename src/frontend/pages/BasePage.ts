import { Page as PlaywrightPage } from 'playwright';

export abstract class BasePage {
  constructor(public readonly page: PlaywrightPage) {}
}
