import { CurrencyCode } from '../currency_rates_service/Currency';

export interface CurrencyPairState {
  initialCurrencyName: string;
  initialCurrencyCode: CurrencyCode;
  initialCurrencyAmount: number;
  pairedCurrencyName: string;
  pairedCurrencyCode: CurrencyCode;
  pairedCurrencyAmount: number;
  rate: number;
}