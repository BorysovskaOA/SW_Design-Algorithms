import { Shipment } from './Shipment';
import { GUI } from './GUI';
import { ShipmentState } from './ShipmentState';

export class Client {
  public constructor(private gui: GUI) {
    gui.on('ship', this.onShip);
  }

  private onShip(state: ShipmentState) {
    const shipment = new Shipment(state);
    console.log(shipment.ship());
  }
}