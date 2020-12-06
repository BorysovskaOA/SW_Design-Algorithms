export class CurrencySliderLine {
  private readonly currencySlider: HTMLInputElement;
  private readonly currencyAmount: HTMLSpanElement;
  constructor(
    private name: string,
    private amount: number,
    private rate: number,
    private min: number,
    private max: number,
    private onChange: (amount: number) => void
  ) {
    this.currencyAmount = this.createAmountSpan();
    this.currencySlider = this.createCurrencySlider();
  }

  public render(): Node {
    const currencySliderLine = document.createElement('div');
    const currencyNameSpan = document.createElement('span');

    currencySliderLine.style.width = '50%';

    currencyNameSpan.innerHTML = `${this.name}: `;
    currencyNameSpan.appendChild(this.currencyAmount);

    currencySliderLine.appendChild(currencyNameSpan);
    currencySliderLine.appendChild(this.currencySlider);

    return currencySliderLine;
  }

  private createAmountSpan() {
    const amountSpan = document.createElement('span');

    amountSpan.innerHTML = (this.amount * this.rate).toString();

    return amountSpan;
  }

  private createCurrencySlider() {
    const currencyInput = document.createElement('input');

    currencyInput.style.width = '92%';

    currencyInput.type = 'range';
    currencyInput.min = this.min.toString();
    currencyInput.max = this.max.toString();
    currencyInput.value = this.amount.toString();
    currencyInput.step = this.rate.toString();
    currencyInput.onchange = this.onCurrencyAmountChange;

    return currencyInput;
  }

  private onCurrencyAmountChange = (event: Event) => {
    // @ts-ignore
    const { value } = event.target;

    if (!isNaN(+value)) {
      this.onChange(+value);
    }
  }

  public update(amount: number) {

    this.currencyAmount.innerHTML = (amount * this.rate).toString();
    this.currencySlider.value = amount.toString();
  }
}