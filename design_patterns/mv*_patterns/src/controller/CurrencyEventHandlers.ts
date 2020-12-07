import { CurrencyCode } from '../currency_rates_service/Currency';

export interface CurrencyEventHandlers {
  onRateChange: (code: CurrencyCode, rate: number) => void;
  onInitialCurrencyAmountChange: (code: CurrencyCode, rate: number) => void;
  onPairedCurrencyAmountChange: (code: CurrencyCode, rate: number) => void;
}