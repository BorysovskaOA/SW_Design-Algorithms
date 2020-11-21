import { Shipper } from './Shipper';

export class ChicagoSprintShipper extends Shipper {
  private static LETTER_PRICE_PER_OUNCE: number = 0.42;
  private static PACKAGE_PRICE_PER_OUNCE: number = 0.20;

  public getLetterCost(weight: number): string {
    return (weight * ChicagoSprintShipper.LETTER_PRICE_PER_OUNCE).toFixed(2);
  }

  public getPackageCost(weight: number): string {
    return (weight * ChicagoSprintShipper.PACKAGE_PRICE_PER_OUNCE).toFixed(2);
  }

  public getOversizedCost(weight: number): string {
    return '0';
  }
}