import { ModelStrategy } from './ModelStrategy';
import { CurrencyRatesService } from '../currency_rates_service/CurrencyRatesService';
import { Currency, CurrencyCode } from '../currency_rates_service/Currency';
import { CurrencyPair } from './CurrencyPair';

export class SameAmountModelStrategy extends ModelStrategy {
  private initialCurrencyAmount: number;

  constructor(initialCurrencyAmount: number) {
    super();

    const currencies = CurrencyRatesService.getInstance().getCurrencyRates();
    const initialCurrency = CurrencyRatesService.getInstance().getInitialCurrency();
    this.initialCurrencyAmount = initialCurrencyAmount;

    this.currencyPairs = currencies.map(
      (currency: Currency) => new CurrencyPair(initialCurrency, currency, this.initialCurrencyAmount)
    );
  }

  public setInitialCurrencyAmount(code: CurrencyCode, amount: number) {
    this.initialCurrencyAmount = amount;

    this.currencyPairs.forEach((currencyPair: CurrencyPair) => {
      currencyPair.updateInitialCurrencyAmount(amount);
    });
  }

  public setPairedCurrencyAmount(code: CurrencyCode, amount: number) {
    const updatedCurrencyPair = this.getCurrencyPairByCode(code);

    updatedCurrencyPair.updatePairedCurrencyAmount(amount);

    this.initialCurrencyAmount = updatedCurrencyPair.getInitialCurrencyAmount();

    this.currencyPairs.forEach((currencyPair: CurrencyPair) => {
      if (currencyPair.getPairedCurrencyCode() === code) {
        return;
      }
      currencyPair.updateInitialCurrencyAmount(this.initialCurrencyAmount);
    });
  }
}