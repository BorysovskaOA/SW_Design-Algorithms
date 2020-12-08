import { Shippable } from './Shippable';

export class ShipmentMarksDecorator {
  constructor(private wrappee: Shippable, private marks: string[]) {
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
}