import { CurrencyPair } from './CurrencyPair';
import { CurrencyCode } from '../currency_rates_service/Currency';
import { CurrencyRatesService } from '../currency_rates_service/CurrencyRatesService';
import { CurrencyPairState } from './CurrencyPairState';

export abstract class ModelStrategy {
  protected currencyPairs: CurrencyPair[] = [];

  public abstract setInitialCurrencyAmount(code: CurrencyCode, amount: number): void;
  public abstract setPairedCurrencyAmount(code: CurrencyCode, amount: number): void;

  // This is made intentionally, so view can just read the values, and change it just through ModelContext
  public getCurrencyPairs(): CurrencyPairState[] {
    return this.currencyPairs.map((currencyPair: CurrencyPair) => ({
      initialCurrencyName: currencyPair.getInitialCurrencyName(),
      initialCurrencyCode: currencyPair.getInitialCurrencyCode(),
      initialCurrencyAmount: currencyPair.getInitialCurrencyAmount(),
      pairedCurrencyName: currencyPair.getPairedCurrencyName(),
      pairedCurrencyCode: currencyPair.getPairedCurrencyCode(),
      pairedCurrencyAmount: currencyPair.getPairedCurrencyAmount(),
      rate: currencyPair.getRate(),
    }));
  }

  public setCurrencyRate(code: CurrencyCode, rate: number) {
    CurrencyRatesService.getInstance().setCurrencyRate(code, rate);

    const updatedCurrencyPair = this.getCurrencyPairByCode(code);
    updatedCurrencyPair.updateRate(rate);
  }

  protected getCurrencyPairByCode(code: CurrencyCode): CurrencyPair {
    const currencyPair: CurrencyPair | undefined = this.currencyPairs.find(
      (currencyPair: CurrencyPair) => currencyPair.getPairedCurrencyCode() === code
    );

    if (!currencyPair) {
      throw new Error(`Cannot find currency pair with code ${code}`);
    }

    return currencyPair;
  }
}