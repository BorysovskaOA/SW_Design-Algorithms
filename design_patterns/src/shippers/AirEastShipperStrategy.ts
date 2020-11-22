import { ShipperStrategy } from './ShipperStrategy';

export class AirEastShipperStrategy extends ShipperStrategy {
  private static SHIPMENT_PRICE_PER_OUNCE: number = 0.39;

  public getCost(weight: number) {
    return (weight * AirEastShipperStrategy.SHIPMENT_PRICE_PER_OUNCE).toFixed(2);
  }
}