import { ShipmentState } from './ShipmentState';

const SHIPMENT_PRICE_PER_OUNCE = 0.39;
let shipmentId = 1;

export class Shipment {
  private state: ShipmentState;

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
    return (this.state.weight * SHIPMENT_PRICE_PER_OUNCE).toFixed(2);
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