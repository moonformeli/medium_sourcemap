import Element from './Element';

export default class Panel extends Element {
  panel;

  constructor() {
    this.init();

    super();
  }

  init() {
    this.panel = super.init('span', 0);
  }
}
