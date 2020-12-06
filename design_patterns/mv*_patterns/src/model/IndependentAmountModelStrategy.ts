import { ModelStrategy } from './ModelStrategy';
import { CurrencyRatesService } from '../currency_rates_service/CurrencyRatesService';
import { Currency, CurrencyCode } from '../currency_rates_service/Currency';
import { CurrencyPair } from './CurrencyPair';

export class IndependentAmountModelStrategy extends ModelStrategy {
  constructor(initialCurrencyAmount: number) {
    super();

    const currencies = CurrencyRatesService.getInstance().getCurrencyRates();
    const initialCurrency = CurrencyRatesService.getInstance().getInitialCurrency();

    this.currencyPairs = currencies.map(
      (currency: Currency) => new CurrencyPair(initialCurrency, currency, initialCurrencyAmount)
    );
  }

  public setInitialCurrencyAmount(code: CurrencyCode, amount: number) {
    const updatedCurrencyPair = this.getCurrencyPairByCode(code);

    updatedCurrencyPair.updateInitialCurrencyAmount(amount);
  }

  public setPairedCurrencyAmount(code: CurrencyCode, amount: number) {
    const updatedCurrencyPair = this.getCurrencyPairByCode(code);

    updatedCurrencyPair.updatePairedCurrencyAmount(amount);
  }
}