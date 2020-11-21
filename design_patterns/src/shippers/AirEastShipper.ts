import { Shipper } from './Shipper';

export class AirEastShipper extends Shipper {
  private static SHIPMENT_PRICE_PER_OUNCE: number = 0.39;

  public getCost(weight: number) {
    return (weight * AirEastShipper.SHIPMENT_PRICE_PER_OUNCE).toFixed(2);
  }
}