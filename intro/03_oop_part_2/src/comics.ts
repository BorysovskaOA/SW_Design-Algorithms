import { Pages } from './pages';
import { Item } from './item';

export class Comics extends Item {
  private _title: string = '';
  private _author: string = '';
  private _artist: string = '';

  constructor(title: string, author: string, artist: string, pages: Pages) {
    super(pages);
    this.title = title;
    this.author = author;
    this.artist = artist;
  }

  public toString() {
    return `Comics: ${this._title} by ${this._author}, the artist is ${this._artist}, number of pages: ${this.pages.length}`
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

  set author(autor: string) {
    this._author = autor
  }

  get artist(): string {
    return this._artist;
  }

  set artist(artist: string) {
    this._artist = artist;
  }
}