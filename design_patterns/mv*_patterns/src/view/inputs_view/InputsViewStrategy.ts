import { ViewStrategy } from '../ViewStrategy';
import { CurrencyPairState } from '../../model/CurrencyPairState';
import { CurrencyPlate } from './CurrencyPlate';
import { CurrencyEventHandlers } from '../../controller/CurrencyEventHandlers';

export class InputsViewStrategy extends ViewStrategy {
  private currencyPairPlates: CurrencyPlate[];
  constructor(currencyPairs: CurrencyPairState[], eventHandlers: CurrencyEventHandlers) {
    super();

    this.currencyPairPlates = currencyPairs.map(
      (currencyPair: CurrencyPairState) => new CurrencyPlate(currencyPair, eventHandlers)
    );
  }

  public render() {
    this.content.innerHTML = "";

    this.currencyPairPlates.forEach((currencyPairPlate: CurrencyPlate) => {
      this.content.appendChild(currencyPairPlate.render());
    });
  }

  public update(currencyPairs: CurrencyPairState[]) {
    this.currencyPairPlates.forEach((currencyPairPlate: CurrencyPlate) => {
      const plateId = currencyPairPlate.getId();
      const currentCurrencyPairState = currencyPairs.find(
        (currencyPair: CurrencyPairState) => currencyPair.pairedCurrencyCode === plateId
      )

      if (!currentCurrencyPairState) {
        throw new Error(`Cannot find currency pair with code ${plateId}`);
      }

      currencyPairPlate.update(currentCurrencyPairState);
    })
  }
}