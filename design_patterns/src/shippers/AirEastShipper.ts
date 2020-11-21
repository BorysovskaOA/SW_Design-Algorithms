import { Shipper } from './Shipper';

export class AirEastShipper extends Shipper {
  private static LETTER_PRICE_PER_OUNCE: number = 0.39;
  private static PACKAGE_PRICE_PER_OUNCE: number = 0.25;

  public getLetterCost(weight: number): string {
    return (weight * AirEastShipper.LETTER_PRICE_PER_OUNCE).toFixed(2);
  }

  public getPackageCost(weight: number): string {
    return (weight * AirEastShipper.PACKAGE_PRICE_PER_OUNCE).toFixed(2);
  }

  public getOversizedCost(weight: number): string {
    return (10 + (weight * AirEastShipper.PACKAGE_PRICE_PER_OUNCE)).toFixed(2);
  }
}