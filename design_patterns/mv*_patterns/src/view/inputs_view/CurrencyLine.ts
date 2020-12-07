export class CurrencyLine {
  private readonly currencyInput: HTMLInputElement;
  constructor(private name: string, private amount: number, private onChange: (amount: number) => void) {
    this.currencyInput = this.createCurrencyInput();
  }

  public render(): Node {
    const currencyLine = document.createElement('div');
    const currencyNameSpan = document.createElement('span');

    currencyLine.style.width = '50%';

    currencyNameSpan.innerHTML = `${this.name} `;

    currencyLine.appendChild(currencyNameSpan);
    currencyLine.appendChild(this.currencyInput);

    return currencyLine;
  }

  private createCurrencyInput() {
    const currencyInput = document.createElement('input');

    currencyInput.style.width = '92%';

    currencyInput.type = 'number';
    currencyInput.min = '0';
    currencyInput.value = this.amount.toString();
    currencyInput.oninput = this.onCurrencyAmountChange;

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
    this.currencyInput.value = amount.toString();
  }
}