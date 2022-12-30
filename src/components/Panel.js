import Element from './Element';

export default class Panel extends Element {
  panel;

  constructor() {
    super();

    this.init();
  }

  init() {
    this.panel = super.init('span', 0);
  }
}
