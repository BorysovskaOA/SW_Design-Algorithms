import { Shipper } from './Shipper';


export class PacificParcelShipper extends Shipper {
  private static SHIPMENT_PRICE_PER_OUNCE: number = 0.51;

  public getCost(weight: number) {
    return (weight * PacificParcelShipper.SHIPMENT_PRICE_PER_OUNCE).toFixed(2);
  }
}