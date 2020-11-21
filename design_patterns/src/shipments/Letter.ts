import { Shipper } from '../shippers/Shipper';
import { Shipment } from './Shipment';

export class Letter extends Shipment {
  protected getPrice(): string {
    return this.shipper.getLetterCost(this.getWeight());
  }
}