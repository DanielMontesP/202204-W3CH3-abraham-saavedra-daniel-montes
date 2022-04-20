class Component {
  element;

  constructor(parentElement, clase, element) {
    this.element = document.createElement(element);
    this.element.className = clase;
    parentElement.append(this.element);
  }
}

export default Component;
