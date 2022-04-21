import Component from "./Component.js";

class CounterParagraph extends Component {
  text;
  counter;

  constructor(parentElement, text, counter) {
    super(parentElement, "p", "info");
    this.text = text;
    this.counter = counter;

    this.render();
  }

  render() {
    this.element.textContent = `You have ${this.counter} ${this.text}`;
  }
}

export default CounterParagraph;
