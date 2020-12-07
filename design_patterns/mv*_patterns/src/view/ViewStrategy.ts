import { CurrencyPairState } from '../model/CurrencyPairState';

export abstract class ViewStrategy {
  protected content: HTMLElement;

  protected constructor() {
    const content = document.getElementById('content')

    if (!content) {
      throw new Error('Unable to find node with id "content" to create the view');
    }

    this.content = content;
  }

  public abstract render(): void;
  public abstract update(currencyPairs: CurrencyPairState[]): void;
}