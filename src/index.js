const body = document.body;

function createButton({ text, onClick }) {
  const button = document.createElement('button');
  button.textContent = text;
  button.style.padding = '8px';
  button.addEventListener('click', onClick);

  return button;
}

function createPanel() {
  const span = document.createElement('span');
  span.textContent = '0';
  span.style.padding = '0 10px';

  return span;
}

let count = 0;
const increment = (panel) => () => {
  count++;
  panel.textContent = count;
};
const decrement = (panel) => () => {
  count--;
  panel.textContent = count;
};

const panel = createPanel();
const incButton = createButton({ text: '+', onClick: increment(panel) });
const decButton = createButton({ text: '-', onClick: decrement(panel) });

const wrapper = document.createElement('div');
wrapper.appendChild(incButton);
wrapper.appendChild(panel);
wrapper.appendChild(decButton);

body.appendChild(wrapper);
