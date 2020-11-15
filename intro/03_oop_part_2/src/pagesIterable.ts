import { Page } from './page';
import { Pages } from './pages';

export const pagesIterable = {
  [Symbol.iterator](): Iterator<Page> {
    let currentIndex = 0;
    //  @ts-ignore
    const pages: Pages = this.pages;

    return {
      next() {

        if (currentIndex <= pages.length - 1) {
          return { done: false, value: pages.getPageByIndex(currentIndex++) };
        }

        return { done: true, value: pages.getPageByIndex(currentIndex) };
      }
    }
  }
}
