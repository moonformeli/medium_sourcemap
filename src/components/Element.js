export default class Element {
  init(tag, text, event) {
    const element = document.createElement(tag);
    element.textContent = text;

    if (event) {
      Object.entries(event).forEach(([key, evt]) => {
        element.addEventListener(key, evt);
      });
    }

    return element;
  }
}
