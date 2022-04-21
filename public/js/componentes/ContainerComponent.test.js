import ContainerComponent from "./ContainerComponent.js";

describe("Given a ContainerComponent class constructor", () => {
  let mainAppContainer;
  beforeEach(() => {
    mainAppContainer = document.createElement("div");
    new ContainerComponent(mainAppContainer);
  });
  describe("When we instance a new ContainerComponent", () => {
    test("Then it sould to create a 'div' tag HTML", () => {
      expect(mainAppContainer.querySelector("div")).not.toBeNull();
    });
  });

  describe("When we instance a new ContainerComponent", () => {
    test("Then it should to create a div with class='container'", () => {
      expect(mainAppContainer.querySelector(".container")).not.toBeNull();
    });
  });

  describe("When we instance a new ContainerComponent", () => {
    test(`Then it render '<header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
            </ul>
          </section>
        </section>
      </main>' inside`, () => {
      const expectedHtml = `<header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <p class="info">You have 4 series pending to watch</p>
            <!--<p class="info">Congrats! You've watched all your series</p>-->
            <ul class="series-list">
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <p class="info">You have watched 4 series</p>
            <!--<p class="info">You already have not watched any serie</p>-->
            <ul class="series-list series-list--watched">
            </ul>
          </section>
        </section>
      </main>`;
      expect(mainAppContainer.querySelector(".container").innerHTML).toBe(
        expectedHtml
      );
    });
  });
});
