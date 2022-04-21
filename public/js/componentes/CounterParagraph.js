import Component from "./Component.js";

class CounterParagraph extends Component {
  text;
  counter;
  secondText;

  constructor(parentElement, text, secondText, counter = "") {
    super(parentElement, "p", "info");
    this.text = text;
    this.counter = counter;
    this.secondText = secondText;

    this.render();
  }

  render() {
    this.element.textContent = ` ${this.text} ${this.counter} ${this.secondText}`;
  }
}

export default CounterParagraph;
