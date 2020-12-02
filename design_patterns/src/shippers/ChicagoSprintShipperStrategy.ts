import { ShipperStrategy } from './ShipperStrategy';

export class ChicagoSprintShipperStrategy extends ShipperStrategy {
  private static SHIPMENT_PRICE_PER_OUNCE: number = 0.42;

  public getCost(weight: number) {
    return (weight * ChicagoSprintShipperStrategy.SHIPMENT_PRICE_PER_OUNCE).toFixed(2);
  }
}