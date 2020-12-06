import { Currency, CurrencyCode } from './Currency';

export const DEFAULT_CURRENCY_RATES: Currency[] = [
  {
    "name": "Euro",
    "code": CurrencyCode.Euro,
    "rate": 1
  },
  {
    "name": "US Dollar",
    "code": CurrencyCode.UnitedStatesDollar,
    "rate": 1.19967
  },
  {
    "name": "British Pound",
    "code": CurrencyCode.BritishPound,
    "rate": 0.896902
  },
  {
    "name": "Indian Rupee",
    "code": CurrencyCode.IndianRupee,
    "rate": 88.7176
  },
  {
    "name": "Australian Dollar",
    "code": CurrencyCode.AustralianDollar,
    "rate": 1.62609
  },
  {
    "name": "Canadian Dollar",
    "code": CurrencyCode.CanadianDollar,
    "rate": 1.5515
  }
];
