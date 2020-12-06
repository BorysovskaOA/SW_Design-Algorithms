import { CurrencyPairState } from '../../model/CurrencyPairState';
import { CurrencyEventHandlers } from '../../controller/CurrencyEventHandlers';
import { CurrencySliderLine } from './CurrencySliderLine';

const SLIDER_RANGE = {
  MIN: 0,
  MAX: 100
}

export class CurrencySliderPlate {
  private initialCurrencySliderLine: CurrencySliderLine;
  private pairedCurrencySliderLine: CurrencySliderLine;

  constructor(private currencyPair: CurrencyPairState,  eventHandlers: CurrencyEventHandlers) {
    this.initialCurrencySliderLine = new CurrencySliderLine(
      this.currencyPair.initialCurrencyName,
      this.currencyPair.initialCurrencyAmount,
      1,
      SLIDER_RANGE.MIN,
      Math.max(SLIDER_RANGE.MAX, this.currencyPair.initialCurrencyAmount),
      (rate: number) => eventHandlers.onInitialCurrencyAmountChange(this.getId(), rate)
    );
    this.pairedCurrencySliderLine = new CurrencySliderLine(
      this.currencyPair.pairedCurrencyName,
      this.currencyPair.pairedCurrencyAmount,
      this.currencyPair.rate,
      this.currencyPair.rate * SLIDER_RANGE.MIN,
      Math.max(SLIDER_RANGE.MAX * this.currencyPair.rate, this.currencyPair.pairedCurrencyAmount),
      (rate: number) => eventHandlers.onPairedCurrencyAmountChange(this.getId(), rate)
    );
  }

  public getId() {
    return this.currencyPair.pairedCurrencyCode;
  }

  public render(): Node {
    const panel = this.createPanelWrapper();
    const rateLine = this.createRateLine()

    panel.appendChild(this.createTitle());
    panel.appendChild(rateLine);

    const currencySliderLineWrapper = this.createCurrencySliderLineWrapper();
    currencySliderLineWrapper.appendChild(this.initialCurrencySliderLine.render());
    currencySliderLineWrapper.appendChild(this.pairedCurrencySliderLine.render());

    panel.appendChild(currencySliderLineWrapper);

    return panel;
  }

  private createPanelWrapper(): Node {
    const panelWrapper = document.createElement('div');

    panelWrapper.style.border = '1px solid black';
    panelWrapper.style.margin = '10px auto';
    panelWrapper.style.padding = '10px';
    panelWrapper.style.width = '500px'

    panelWrapper.id = this.currencyPair.pairedCurrencyCode;

    return panelWrapper;
  }

  private createTitle(): Node {
    const title = document.createElement('h4');

    title.style.margin = '0 0 20px';

    title.innerHTML = this.currencyPair.pairedCurrencyName;

    return title
  }

  private createRateLine(): Node {
    const rate = document.createElement('div');

    rate.innerHTML = `1 ${this.currencyPair.initialCurrencyName} is ${this.currencyPair.rate} ${this.currencyPair.pairedCurrencyName}`;

    return rate
  }

  private createCurrencySliderLineWrapper() {
    const currencySliderLineWrapper = document.createElement('div');

    currencySliderLineWrapper.style.display = 'flex';
    currencySliderLineWrapper.style.justifyContent = 'space-between';
    currencySliderLineWrapper.style.marginTop = '20px';

    return currencySliderLineWrapper;
  }

  public update(currencyPair: CurrencyPairState) {
    this.initialCurrencySliderLine.update(currencyPair.initialCurrencyAmount);
    this.pairedCurrencySliderLine.update(currencyPair.pairedCurrencyAmount);
  }
}