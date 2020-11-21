import { Shipper } from './Shipper';


export class PacificParcelShipper extends Shipper {
  private static LETTER_PRICE_PER_OUNCE: number = 0.51;
  private static PACKAGE_PRICE_PER_OUNCE: number = 0.19;

  public getLetterCost(weight: number): string {
    return (weight * PacificParcelShipper.LETTER_PRICE_PER_OUNCE).toFixed(2);
  }

  public getPackageCost(weight: number): string {
    return (weight * PacificParcelShipper.PACKAGE_PRICE_PER_OUNCE).toFixed(2);
  }

  public getOversizedCost(weight: number): string {
    return (weight * (0.02 + PacificParcelShipper.PACKAGE_PRICE_PER_OUNCE)).toFixed(2);
  }
}