export default class Component {
  constructor(params) {
    this.params = params;
  }

  render(text = 'Hello World') {
    const element = document.createElement('div');

    element.innerHTML = text;

    return element;
  }
}

