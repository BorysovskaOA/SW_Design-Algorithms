import { Shipper } from './Shipper';

export class ChicagoSprintShipper extends Shipper {
  private static SHIPMENT_PRICE_PER_OUNCE: number = 0.42;

  public getCost(weight: number) {
    return (weight * ChicagoSprintShipper.SHIPMENT_PRICE_PER_OUNCE).toFixed(2);
  }
}