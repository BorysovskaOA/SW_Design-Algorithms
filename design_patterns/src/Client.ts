import { Shipment } from './shipments/Shipment';
import { GUI } from './GUI';
import { ShipmentState } from './ShipmentState';
import { Letter } from './shipments/Letter';
import { Package } from './shipments/Package';
import { Oversized } from './shipments/Oversized';
import { ShipmentMarksDecorator } from './shipments/ShipmentMarksDecorator';

export class Client {
  public constructor(private gui: GUI) {
    gui.on('ship', this.onShip);
  }

  private onShip(state: ShipmentState) {
    const shipment = Client.getShipment(state);
    const shipmentWithSpecificMarks = new ShipmentMarksDecorator(shipment, state.marks);
    console.log(shipmentWithSpecificMarks.ship(), '\n');
  }

  private static getShipment(state: ShipmentState) {
    if (state.weight <= 15) {
      return new Letter(state);
    }

    if (state.weight <= 160) {
      return new Package(state);
    }

    return new Oversized(state);
  }
}