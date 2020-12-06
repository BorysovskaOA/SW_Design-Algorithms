import { ViewStrategy } from '../ViewStrategy';
import { CurrencyPairState } from '../../model/CurrencyPairState';
import { CurrencyEventHandlers } from '../../controller/CurrencyEventHandlers';
import { CurrencySliderPlate } from './CurrencySliderPlate';

export class SlidersViewStrategy extends ViewStrategy {
  private currencyPairPlates: CurrencySliderPlate[];
  constructor(currencyPairs: CurrencyPairState[], eventHandlers: CurrencyEventHandlers) {
    super();

    this.currencyPairPlates = currencyPairs.map(
      (currencyPair: CurrencyPairState) => new CurrencySliderPlate(currencyPair, eventHandlers)
    );
  }

  public render() {
    this.content.innerHTML = "";

    this.currencyPairPlates.forEach((currencyPairPlate: CurrencySliderPlate) => {
      this.content.appendChild(currencyPairPlate.render());
    });
  }

  public update(currencyPairs: CurrencyPairState[]) {
    this.currencyPairPlates.forEach((currencyPairPlate: CurrencySliderPlate) => {
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