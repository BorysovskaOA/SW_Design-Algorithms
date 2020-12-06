import { DEFAULT_CURRENCY_RATES } from './DefaultCurrencyRates';
import { CurrencyCode, Currency } from './Currency';

export class CurrencyRatesService {
  private static instance: CurrencyRatesService;
  private currentCurrencyRates: Currency[];
  private initialCurrency: Currency;

  private constructor() {
    this.initialCurrency = DEFAULT_CURRENCY_RATES[0]
    this.currentCurrencyRates = DEFAULT_CURRENCY_RATES.slice(1);
  }

  public static getInstance(): CurrencyRatesService {
    if (!this.instance) {
      this.instance = new CurrencyRatesService();
    }

    return this.instance;
  }

  public getInitialCurrency(): Currency {
    return this.initialCurrency;
  }

  public getCurrencyRates(): Currency[] {
    return this.currentCurrencyRates;
  }

  public setCurrencyRate(code: CurrencyCode, rate: number) {
    if  (code === this.initialCurrency.code) {
      throw new Error('Unable to set rate to initial currency.');
    }

    this.currentCurrencyRates = this.currentCurrencyRates.map((currency: Currency) => ({
      ...currency,
      rate,
    }));
  }
}
