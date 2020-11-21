import { Shipment } from './Shipment';

export class Oversized extends Shipment {
  protected getPrice(): string {
    return this.shipper.getOversizedCost(this.getWeight());
  }
}