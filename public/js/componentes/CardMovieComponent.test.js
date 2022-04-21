import CardMovieComponent from "./CardMovieComponent.js";

describe("Given a CardMovieComponent class constructor", () => {
  let ownUl;
  beforeEach(() => {
    ownUl = document.createElement("ul");
    ownUl.classList.add("series-list");
  });
  describe("When we instenciated a new CardMovieComponent", () => {
    test("Then is should render a li tag in to ul with class='series-list'", () => {
      new CardMovieComponent(ownUl);

      expect(ownUl.querySelector("li")).not.toBeNull();
    });
  });

  describe("When we instenciated a new CardMovieComponent", () => {
    test("Then is should render li with class='serie'", () => {});
  });
});
