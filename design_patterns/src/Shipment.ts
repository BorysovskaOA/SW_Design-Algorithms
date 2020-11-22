import { ShipmentState } from './ShipmentState';
import { ShipperStrategy } from './shippers/ShipperStrategy';
import { PacificParcelShipperStrategy } from './shippers/PacificParcelShipperStrategy';
import { ChicagoSprintShipperStrategy } from './shippers/ChicagoSprintShipperStrategy';
import { AirEastShipperStrategy } from './shippers/AirEastShipperStrategy';
import { ShipperContext } from './shippers/ShipperContext';

let shipmentId = 1;

export class Shipment {
  private state: ShipmentState;
  private shipper: ShipperStrategy;

  public constructor(state: ShipmentState) {
    this.state = state.shipmentId === 0
      ? {
        ...state,
        shipmentId: Shipment.getShipmentId(),
      }
      : state;
  }

  public static getShipmentId() {
    return shipmentId++;
  }

  public ship() {
    return `Package with shipmentId ${
      this.state.shipmentId
    } was sent from ${
      this.state.fromAddress
    }, ${
      this.state.fromZipCode
    } to ${
      this.state.toAddress
    }, ${
      this.state.toZipCode
    }. Price of delivery: ${
      this.getPrice()
    }$`
  }

  private getPrice() {
    const context = new ShipperContext(this.getShipperByFromZipCode(this.state.fromZipCode));
    return context.execute(this.state.weight);
  }

  private getShipperByFromZipCode(fromZipCode?: string): ShipperStrategy {
    if (!fromZipCode) {
      return new AirEastShipperStrategy();
    }

    switch (fromZipCode.charAt(0)) {
      case '9':
      case '8':
      case '7':
        return new PacificParcelShipperStrategy();
      case '6':
      case '5':
      case '4':
        return new ChicagoSprintShipperStrategy();
      default:
        return new AirEastShipperStrategy()
    }
  }

  public changeFromAddress(address: string) {
    this.state.fromAddress = address
  }

  public changeFromZipCode(zipCode: string) {
    this.state.fromZipCode = zipCode;
  }

  public changeToAddress(address: string) {
    this.state.toAddress = address
  }

  public changeToZipCode(zipCode: string) {
    this.state.toZipCode = zipCode;
  }

  public changeMarks(marks: string[]) {
    this.state.marks = marks;
  }
}