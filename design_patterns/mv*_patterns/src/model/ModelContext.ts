import { ModelStrategy } from './ModelStrategy';
import { CurrencyCode } from '../currency_rates_service/Currency';
import { CurrencyPairState } from './CurrencyPairState';

export class ModelContext {
  constructor(private strategy: ModelStrategy) {
  }

  public setStrategy(strategy: ModelStrategy) {
    this.strategy = strategy;
  }

  public getPairs(): CurrencyPairState[] {
    return this.strategy.getCurrencyPairs();
  }

  public setCurrencyRate(code: CurrencyCode, rate: number) {
    this.strategy.setCurrencyRate(code, rate);
  }

  public setInitialCurrencyAmount(code: CurrencyCode, amount: number) {
    this.strategy.setInitialCurrencyAmount(code, amount);
  }

  public setPairedCurrencyAmount(code: CurrencyCode, amount: number) {
    this.strategy.setPairedCurrencyAmount(code, amount);
  }
}