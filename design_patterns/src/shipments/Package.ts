import { Shipment } from './Shipment';

export class Package extends Shipment {
  protected getPrice(): string {
    return this.shipper.getPackageCost(this.getWeight());
  }
}