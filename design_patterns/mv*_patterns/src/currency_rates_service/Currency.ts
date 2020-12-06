export enum CurrencyCode {
  CanadianDollar = "CAD",
  AustralianDollar = "AUD",
  IndianRupee = "INR",
  BritishPound = "GBP",
  UnitedStatesDollar = "USD",
  Euro = "EUR"
}

export interface Currency {
  name: string;
  code: CurrencyCode;
  rate: number;
}
