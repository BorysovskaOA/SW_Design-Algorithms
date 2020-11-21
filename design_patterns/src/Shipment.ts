import { ShipmentState } from './ShipmentState';
import { Shipper } from './shippers/Shipper';
import { PacificParcelShipper } from './shippers/PacificParcelShipper';
import { ChicagoSprintShipper } from './shippers/ChicagoSprintShipper';
import { AirEastShipper } from './shippers/AirEastShipper';

let shipmentId = 1;

export class Shipment {
  private state: ShipmentState;
  private shipper: Shipper;

  public constructor(state: ShipmentState) {
    this.state = state.shipmentId === 0
      ? {
        ...state,
        shipmentId: Shipment.getShipmentId(),
      }
      : state;
    this.shipper = this.getShipperByFromZipCode(state.fromZipCode);
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
    return this.shipper.getCost(this.state.weight);
  }

  private getShipperByFromZipCode(fromZipCode?: string) {
    if (!fromZipCode) {
      return new AirEastShipper();
    }

    switch (fromZipCode.charAt(0)) {
      case '9':
      case '8':
      case '7':
        return new PacificParcelShipper();
      case '6':
      case '5':
      case '4':
        return new ChicagoSprintShipper();
      default:
        return new AirEastShipper()
    }
  }

  public changeFromAddress(address: string) {
    this.state.fromAddress = address
  }

  public changeFromZipCode(zipCode: string) {
    this.state.fromZipCode = zipCode;
    this.shipper = this.getShipperByFromZipCode(zipCode);
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