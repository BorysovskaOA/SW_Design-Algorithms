import { Currency, CurrencyCode } from '../currency_rates_service/Currency';

export class CurrencyPair {
  private initialCurrencyName: string;
  private initialCurrencyCode: CurrencyCode;
  private initialCurrencyAmount: number;
  private pairedCurrencyName: string;
  private pairedCurrencyCode: CurrencyCode;
  private pairedCurrencyAmount: number;
  private rate: number;

  constructor(initial: Currency, currency: Currency, initialCurrencyAmount: number) {
    this.initialCurrencyName = initial.name;
    this.initialCurrencyCode = initial.code;
    this.initialCurrencyAmount = initialCurrencyAmount;
    this.pairedCurrencyName = currency.name;
    this.pairedCurrencyCode = currency.code;
    this.pairedCurrencyAmount = this.initialCurrencyAmount * currency.rate;
    this.rate = currency.rate;
  }

  public getRate() : number {
    return this.rate;
  }

  public updateRate(rate: number) {
    this.rate = rate;
    this.pairedCurrencyAmount = this.initialCurrencyAmount * rate;
  }

  public getInitialCurrencyName(): string {
    return this.initialCurrencyName;
  }

  public getInitialCurrencyCode(): CurrencyCode {
    return this.initialCurrencyCode;
  }

  public getInitialCurrencyAmount(): number {
    return this.initialCurrencyAmount;
  }

  public updateInitialCurrencyAmount(amount: number) {
    this.initialCurrencyAmount = amount;
    this.pairedCurrencyAmount = this.initialCurrencyAmount * this.rate;
  }

  public getPairedCurrencyName(): string {
    return this.pairedCurrencyName;
  }

  public getPairedCurrencyCode(): CurrencyCode {
    return this.pairedCurrencyCode;
  }

  public getPairedCurrencyAmount(): number {
    return this.pairedCurrencyAmount;
  }

  public updatePairedCurrencyAmount(amount: number) {
    this.pairedCurrencyAmount = amount;
    this.initialCurrencyAmount = this.pairedCurrencyAmount / this.rate;
  }
}