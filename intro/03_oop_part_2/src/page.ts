export class Page {
  constructor(private pageNumber: number, private pageType: string, private pageMaterial: string) {
  }

  toString() {
    return `here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`;
  }
}