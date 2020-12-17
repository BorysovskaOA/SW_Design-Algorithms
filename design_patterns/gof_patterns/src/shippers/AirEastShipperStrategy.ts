import { ShipperStrategy } from './ShipperStrategy';

export class AirEastShipperStrategy extends ShipperStrategy {
  private static LETTER_PRICE_PER_OUNCE: number = 0.39;
  private static PACKAGE_PRICE_PER_OUNCE: number = 0.25;

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
    return (weight * AirEastShipperStrategy.LETTER_PRICE_PER_OUNCE).toFixed(2);
  }

  private getPackageCost(weight: number): string {
    return (weight * AirEastShipperStrategy.PACKAGE_PRICE_PER_OUNCE).toFixed(2);
  }

  private getOversizedCost(weight: number): string {
    return (10 + (weight * AirEastShipperStrategy.PACKAGE_PRICE_PER_OUNCE)).toFixed(2);
  }
}