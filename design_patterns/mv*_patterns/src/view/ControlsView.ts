enum RadioGroupType {
  View = 'view',
  Model = 'model'
}

export enum ViewType {
  Inputs = 'Inputs',
  Sliders = 'Sliders'
}

export enum ModelType {
  SameAmount = 'Same amount',
  IndependentAmount = 'Independent amount'
}

export interface ControlProps<T> {
  selected: T,
  onChange: (type: T) => void;
}

interface ControlsProps {
  view: ControlProps<ViewType>,
  model: ControlProps<ModelType>
}

export class ControlsView {
  private content: HTMLElement;
  private controls: {
    [key in RadioGroupType]: {
      inputs: {
        [key: string]: HTMLElement
      }
    }
  }

  constructor(controlsProps: ControlsProps) {
    const content = document.getElementById('controls')

    if (!content) {
      throw new Error('Unable to find node with id "content" to create the view');
    }

    this.content = content;

    this.controls = {
      [RadioGroupType.View]: {
        inputs: {
          [ViewType.Inputs]: this.createRadioButton<ViewType>(
            RadioGroupType.View,
            ViewType.Inputs,
            ViewType.Inputs === controlsProps.view.selected,
            controlsProps.view.onChange),
          [ViewType.Sliders]: this.createRadioButton<ViewType>(
            RadioGroupType.View,
            ViewType.Sliders,
            ViewType.Sliders === controlsProps.view.selected,
            controlsProps.view.onChange),
        }
      },
      [RadioGroupType.Model]: {
        inputs: {
          [ModelType.SameAmount]: this.createRadioButton<ModelType>(
            RadioGroupType.Model,
            ModelType.SameAmount,
            ModelType.SameAmount === controlsProps.model.selected,
            controlsProps.model.onChange),
          [ModelType.IndependentAmount]: this.createRadioButton<ModelType>(
            RadioGroupType.Model,
            ModelType.IndependentAmount,
            ModelType.IndependentAmount === controlsProps.model.selected,
            controlsProps.model.onChange),
        }
      }
    };
  }

  public render() {
    this.content.innerHTML = '';
    const wrapper = this.createWrapper();

    const viewRadioGroup = this.createRadioGroup<ViewType>(
      RadioGroupType.View,
      Object.values(ViewType)
    );
    const modelRadioGroup = this.createRadioGroup<ModelType>(
      RadioGroupType.Model,
      Object.values(ModelType)
    );

    wrapper.appendChild(viewRadioGroup);
    wrapper.appendChild(modelRadioGroup);

    this.content.appendChild(wrapper);
  };

  private createWrapper(): Node {
    const wrapper = document.createElement('div');

    wrapper.style.display = 'flex';
    wrapper.style.margin = '10px auto';
    wrapper.style.padding = '10px';
    wrapper.style.width = '400px'

    return wrapper;
  }

  private createRadioGroup<T extends string>(type: RadioGroupType, values: T[]) {
    const radioGroup = this.createRadioGroupWrapper();

    const title = this.createRadioGroupTitle(type);
    radioGroup.appendChild(title);

    values.map((value: T) => {
      const label = this.createLabel<T>(value);
      const radioButton = this.controls[type].inputs[value];

      label.prepend(radioButton);
      radioGroup.appendChild(label);
    });

    return radioGroup;
  }

  private createRadioGroupWrapper() {
    const radioGroup = document.createElement('div');

    radioGroup.style.width = '50%';
    radioGroup.style.display = 'flex'
    radioGroup.style.flexDirection = 'column';

    return radioGroup;
  }

  private createRadioGroupTitle(type: RadioGroupType) {
    const span = document.createElement('h4');

    span.style.textTransform = 'uppercase';

    span.innerHTML = type;

    return span;
  }

  private createRadioButton<T extends string>(type: RadioGroupType, value: T, isSelected: boolean, onChange: (value: T) => void) {
    const input = document.createElement('input');

    input.type = "radio";
    input.value = value;
    input.name = type;
    input.checked = isSelected;
    input.onchange = (event: Event) => {
      // @ts-ignore
      const { value } = event.target
      onChange(value);
    }

    return input
  }

  private createLabel<T extends string>(value: T) {
    const label = document.createElement('label');
    const textNode = document.createTextNode(value);

    label.style.width = '100%';

    label.appendChild(textNode);

    return label;
  }
}