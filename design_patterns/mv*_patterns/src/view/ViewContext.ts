import { ViewStrategy } from './ViewStrategy';
import { CurrencyPairState } from '../model/CurrencyPairState';

export class ViewContext {
  constructor(private strategy: ViewStrategy) {
  }

  public setStrategy(strategy: ViewStrategy) {
    this.strategy = strategy;
  }

  public render() {
    this.strategy.render();
  }

  public update(currencyPairs: CurrencyPairState[]) {
    this.strategy.update(currencyPairs);
  }
}