import { Pages } from './pages';
import { Item } from './item';

export class Magazine extends Item {
  private _title : string = '';

  constructor(title: string, pages: Pages) {
    super(pages);
    this.title = title;
  }

  public toString() {
    return `Magazine: ${this._title} with number of pages: ${this.pages.length}`
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }
}