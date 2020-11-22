import { ShipperStrategy } from './ShipperStrategy';


export class PacificParcelShipperStrategy extends ShipperStrategy {
  private static LETTER_PRICE_PER_OUNCE: number = 0.51;
  private static PACKAGE_PRICE_PER_OUNCE: number = 0.19;

  public getCost(weight: number, type: string) {
    if (type === 'letter') {
      return this.getLetterCost(weight);
    }

    if (type === 'package') {
      return this.getPackageCost(weight);
    }

    return this.getOversizedCost(weight);
  }

  private getLetterCost(weight: number): string {
    return (weight * PacificParcelShipperStrategy.LETTER_PRICE_PER_OUNCE).toFixed(2);
  }

  private getPackageCost(weight: number): string {
    return (weight * PacificParcelShipperStrategy.PACKAGE_PRICE_PER_OUNCE).toFixed(2);
  }

  private getOversizedCost(weight: number): string {
    return (weight * (0.02 + PacificParcelShipperStrategy.PACKAGE_PRICE_PER_OUNCE)).toFixed(2);
  }
}