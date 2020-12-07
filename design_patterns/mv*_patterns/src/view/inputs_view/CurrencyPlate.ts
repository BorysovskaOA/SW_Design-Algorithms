import { CurrencyPairState } from '../../model/CurrencyPairState';
import { RateLine } from './RateLine';
import { CurrencyLine } from './CurrencyLine';
import { CurrencyEventHandlers } from '../../controller/CurrencyEventHandlers';

export class CurrencyPlate {
  private rateLine: RateLine;
  private initialCurrencyLine: CurrencyLine;
  private pairedCurrencyLine: CurrencyLine;

  constructor(private currencyPair: CurrencyPairState,  eventHandlers: CurrencyEventHandlers) {
    this.rateLine = new RateLine(
      currencyPair,
      (rate: number) => eventHandlers.onRateChange(this.getId(), rate)
    );
    this.initialCurrencyLine = new CurrencyLine(
      this.currencyPair.initialCurrencyName,
      this.currencyPair.initialCurrencyAmount,
      (rate: number) => eventHandlers.onInitialCurrencyAmountChange(this.getId(), rate)
    );
    this.pairedCurrencyLine = new CurrencyLine(
      this.currencyPair.pairedCurrencyName,
      this.currencyPair.pairedCurrencyAmount,
      (rate: number) => eventHandlers.onPairedCurrencyAmountChange(this.getId(), rate)
    );
  }

  public getId() {
    return this.currencyPair.pairedCurrencyCode;
  }

  public render(): Node {
    const panel = this.createPanelWrapper();

    panel.appendChild(this.createTitle());
    panel.appendChild(this.rateLine.render());

    const currencyLineWrapper = this.createCurrencyLineWrapper();
    currencyLineWrapper.appendChild(this.initialCurrencyLine.render());
    currencyLineWrapper.appendChild(this.pairedCurrencyLine.render());

    panel.appendChild(currencyLineWrapper);

    return panel;
  }

  private createPanelWrapper(): Node {
    const panelWrapper = document.createElement('div');

    panelWrapper.style.border = '1px solid black';
    panelWrapper.style.margin = '10px auto';
    panelWrapper.style.padding = '10px';
    panelWrapper.style.width = '400px'

    panelWrapper.id = this.currencyPair.pairedCurrencyCode;

    return panelWrapper;
  }

  private createTitle(): Node {
    const title = document.createElement('h4');

    title.style.margin = '0 0 20px';

    title.innerHTML = this.currencyPair.pairedCurrencyName;

    return title
  }

  private createCurrencyLineWrapper() {
    const currencyLineWrapper = document.createElement('div');

    currencyLineWrapper.style.display = 'flex';
    currencyLineWrapper.style.justifyContent = 'space-between';
    currencyLineWrapper.style.marginTop = '20px';

    return currencyLineWrapper;
  }

  public update(currencyPair: CurrencyPairState) {
    this.rateLine.update(currencyPair.rate);
    this.initialCurrencyLine.update(currencyPair.initialCurrencyAmount);
    this.pairedCurrencyLine.update(currencyPair.pairedCurrencyAmount);
  }
}