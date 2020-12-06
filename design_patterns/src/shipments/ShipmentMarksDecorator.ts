import { Shipment } from './Shipment';
import { ShipmentInterface } from './ShipmentInterface';

export class ShipmentMarksDecorator implements ShipmentInterface{
  constructor(private wrappee: Shipment, private marks: string[]) {
  }

  public ship() {
    const marks = this.getFormattedMarksToApply();

    return `${this.wrappee.ship()}${ marks.length > 0 ? `\n${this.getFormattedMarksToApply()}` : ''}`
  }

  private getFormattedMarksToApply() {
    return this.marks.reduce(
      (acc: string[], mark: string) => {
        if (mark === 'Fragile') {
          return [
            ...acc,
            '**MARK FRAGILE**'
          ]
        }

        if (mark === 'Do Not Leave') {
          return [
            ...acc,
            '**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**'
          ]
        }

        if (mark === 'Return Receipt Requested') {
          return [
            ...acc,
            '**MARK RETURN RECEIPT REQUESTED**'
          ]
        }

        return acc;
      },
      []
    );
  }

  public changeFromAddress(address: string) {
    this.wrappee.changeFromAddress(address)
  }

  public changeToAddress(address: string) {
    this.wrappee.changeToAddress(address)
  }

  public changeFromZipCode(zipCode: string) {
    this.wrappee.changeFromZipCode(zipCode);
  }

  public changeToZipCode(zipCode: string) {
    this.wrappee.changeToZipCode(zipCode);
  }

  public changeMarks(marks: string[]) {
    this.marks = marks;
    this.wrappee.changeMarks(marks);
  }

  public getWeight() {
    return this.wrappee.getWeight();
  }

  public getFromZipCode() {
    return this.wrappee.getFromZipCode()
  }
}