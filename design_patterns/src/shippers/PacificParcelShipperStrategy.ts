import { ShipperStrategy } from './ShipperStrategy';


export class PacificParcelShipperStrategy extends ShipperStrategy {
  private static SHIPMENT_PRICE_PER_OUNCE: number = 0.51;

  public getCost(weight: number) {
    return (weight * PacificParcelShipperStrategy.SHIPMENT_PRICE_PER_OUNCE).toFixed(2);
  }
}