import { CurrencyPairState } from '../../model/CurrencyPairState';
import { CurrencyCode } from '../../currency_rates_service/Currency';

export class RateLine {
  private rate: number;
  private readonly initialCurrencyName: string;
  private readonly pairedCurrencyName: string;
  private readonly rateInput: HTMLInputElement;

  constructor(currencyPair: CurrencyPairState, private onChange: (rate: number) => void) {
    this.rate = currencyPair.rate;
    this.initialCurrencyName = currencyPair.initialCurrencyName;
    this.pairedCurrencyName = currencyPair.pairedCurrencyName;

    this.rateInput = this.createRateInput();
  }

  private createRateInput() {
    const rateInput = document.createElement('input');

    rateInput.type = 'number';
    rateInput.min = '0';
    rateInput.value = this.rate.toString();
    rateInput.oninput = this.onRateChange;

    return rateInput;
  }

  private onRateChange = (event: Event) => {
    // @ts-ignore
    const { value } = event.target;

    if (!isNaN(+value)) {
      this.onChange(+value);
    }
  }

  public render(): Node {
    const rate = document.createElement('div');
    const beginSpan = document.createElement('span');
    const finishSpan = document.createElement('span');

    beginSpan.innerHTML = `1 ${this.initialCurrencyName} is `;
    finishSpan.innerHTML = ` ${this.pairedCurrencyName}`;

    rate.appendChild(beginSpan);
    rate.appendChild(this.rateInput);
    rate.appendChild(finishSpan);

    return rate;
  }

  public update(rate: number) {
    this.rateInput.value = rate.toString();
  }
}