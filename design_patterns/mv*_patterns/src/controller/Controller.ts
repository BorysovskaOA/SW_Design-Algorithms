import { ViewContext } from '../view/ViewContext';
import { InputsViewStrategy } from '../view/inputs_view/InputsViewStrategy';
import { ModelContext } from '../model/ModelContext';
import { SameAmountModelStrategy } from '../model/SameAmountModelStrategy';
import { CurrencyPairState } from '../model/CurrencyPairState';
import { CurrencyEventHandlers } from './CurrencyEventHandlers';
import { CurrencyCode } from '../currency_rates_service/Currency';
import { ControlsView, ModelType, ViewType } from '../view/ControlsView';
import { SlidersViewStrategy } from '../view/slider_view/SlidersViewStrategy';
import { IndependentAmountModelStrategy } from '../model/IndependentAmountModelStrategy';

export class Controller {
  private viewContext: ViewContext;
  private modelContext: ModelContext;
  private controlsView: ControlsView;
  private readonly viewEventHandlers: CurrencyEventHandlers;
  private initialCurrencyAmount: number = 1;

  constructor() {
    this.viewEventHandlers = {
      onRateChange: this.onRateChange,
      onInitialCurrencyAmountChange: this.onInitialCurrencyAmountChange,
      onPairedCurrencyAmountChange: this.onPairedCurrencyAmountChange
    }

    this.modelContext = new ModelContext(new SameAmountModelStrategy(this.initialCurrencyAmount));
    const currencyPairs: CurrencyPairState[] = this.modelContext.getPairs();

    this.viewContext = new ViewContext(
      new InputsViewStrategy(currencyPairs, this.viewEventHandlers),
    );

    this.controlsView = new ControlsView({
      view: {
        selected: ViewType.Inputs,
        onChange: this.onViewChange
      },
      model: {
        selected: ModelType.SameAmount,
        onChange: this.onModelChange
      }
    });
  }

  renderView() {
    this.controlsView.render();
    this.viewContext.render();
  }

  private onRateChange = (code: CurrencyCode, rate: number) => {
    this.modelContext.setCurrencyRate(code, rate);
    this.updateView();
  }

  private onInitialCurrencyAmountChange = (code: CurrencyCode, rate: number) => {
    this.initialCurrencyAmount = rate;
    this.modelContext.setInitialCurrencyAmount(code, rate);
    this.updateView();
  }

  private onPairedCurrencyAmountChange = (code: CurrencyCode, rate: number) => {
    this.modelContext.setPairedCurrencyAmount(code, rate);
    this.updateView();
  }

  private onViewChange = (type: ViewType) => {
    const currencyPairs: CurrencyPairState[] = this.modelContext.getPairs();

    if (type === ViewType.Sliders) {
      this.viewContext.setStrategy(new SlidersViewStrategy(currencyPairs, this.viewEventHandlers));

    } else {
      this.viewContext.setStrategy(new InputsViewStrategy(currencyPairs, this.viewEventHandlers));
    }

    this.viewContext.render();
  }

  private onModelChange = (type: ModelType) => {
    if (type === ModelType.IndependentAmount) {
      this.modelContext.setStrategy(new IndependentAmountModelStrategy(this.initialCurrencyAmount));
    } else {
      this.modelContext.setStrategy(new SameAmountModelStrategy(this.initialCurrencyAmount));
    }

    this.updateView();
  }

  private updateView() {
    const currencyPairs: CurrencyPairState[] = this.modelContext.getPairs();
    this.viewContext.update(currencyPairs);
  }
}