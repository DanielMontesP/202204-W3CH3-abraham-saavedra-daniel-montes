import CounterParagraph from "./CounterParagraph.js";

describe("Given a CounterParagraph constructor", () => {
  let container;
  beforeEach(() => {
    container = document.createElement("div");
  });
  describe("When we instancied a Conter Paragraph", () => {
    test("Then it should to render a p tag on html", () => {
      new CounterParagraph(container, "", "");

      expect(container.querySelector("p")).not.toBeNull();
    });
  });
});
