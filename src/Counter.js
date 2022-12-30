import Buttons from './components/Buttons';
import Panel from './components/Panel';

export default class Counter {
  buttons;
  panel;

  constructor() {
    this.init();
  }

  init() {
    this.panel = new Panel();
    this.buttons = new Buttons(this.panel.panel);
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.appendChild(this.buttons.incButton);
    wrapper.appendChild(this.panel.panel);
    wrapper.appendChild(this.buttons.decButton);

    const body = document.body;
    body.appendChild(wrapper);
  }
}
