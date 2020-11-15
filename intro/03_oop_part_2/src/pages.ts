import { Page } from './page';

export class Pages {
  constructor(private pages: Page[]) {
  }

  public toString() {
    return this.pages.length.toString();
  }

  public getPageByIndex(index: number) {
    return this.pages[index];
  }

  get length() {
    return this.pages.length;
  }
}