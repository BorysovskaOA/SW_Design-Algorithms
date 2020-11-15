import { pagesIterable } from './pagesIterable';
import { Pages } from './pages';

export abstract class Item {
  public pages: Pages;

  protected constructor(pages: Pages) {
    this.pages = pages;
  }

  abstract toString(): string;
}

Object.assign(Item.prototype, pagesIterable);
