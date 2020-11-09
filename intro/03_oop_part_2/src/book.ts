import { Pages } from './pages';
import { Item } from './item';

export class Book extends Item {
  private _title: string = '';
  private _author: string = '';

  constructor(title: string, author: string, pages: Pages) {
    super(pages);
    this.title = title;
    this.author = author;
  }

  public toString() {
    return `Book: ${this._title} by ${this._author} with number of pages: ${this.pages.length}`
  }

  get title(): string {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get author(): string {
    return this._author;
  }

  set author(author: string) {
    this._author = author
  }
}