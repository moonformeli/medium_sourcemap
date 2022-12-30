import Element from './Element';

export default class Buttons extends Element {
  incButton;
  decButton;
  panel;

  constructor(panel) {
    super();

    this.panel = panel;
    this.init();
  }

  init() {
    const increment = () => {
      const count = Number(this.panel.textContent);
      this.panel.textContent = count + 1;
    };
    const decrement = () => {
      const count = Number(this.panel.textContent);
      this.panel.textContent = count - 1;
    };

    this.incButton = super.init('button', '+', { click: increment });
    this.decButton = super.init('button', '-', { click: decrement });
  }
}
