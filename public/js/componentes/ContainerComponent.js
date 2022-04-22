import Component from "./Component.js";
import CounterParagraph from "./CounterParagraph.js";

class ContainerComponent extends Component {
  seriesList;
  constructor(parentElement, seriesList) {
    super(parentElement, "div", "container");
    this.seriesList = seriesList;

    this.render();
    this.watchedHeader();
    this.unWatchedHeader();
  }

  render() {
    this.element.innerHTML = `<header class="main-header">
        <h1 class="main-title">My Series</h1>
      </header>
      <main class="main">
        <section class="series">
          <h2 class="section-title">Series list</h2>
          <section class="series-pending">
            <h3 class="subsection-title">Pending series</h3>
            <ul class="series-list">
            </ul>
          </section>
          <section class="series-watched">
            <h3 class="subsection-title">Watched series</h3>
            <ul class="series-list series-list--watched">
            </ul>
          </section>
        </section>
      </main>`;
  }

  watchedHeader() {
    const infoWatchedSeries = document.querySelector(".series-watched h3");
    let counter = 0;
    this.seriesList.forEach((serie) => {
      if (serie.watched) {
        counter += 1;
      } else {
        counter += 0;
      }
    });
    if (counter === 0) {
      new CounterParagraph(
        infoWatchedSeries,
        "You already have not",
        "watched any serie"
      );
    }
    new CounterParagraph(
      infoWatchedSeries,
      "You have watched",
      "series",
      counter
    );
  }

  unWatchedHeader() {
    const infoPendingSeries = document.querySelector(".series-pending h3");
    let counter = 0;
    this.seriesList.forEach((serie) => {
      if (!serie.watched) {
        counter += 1;
      } else {
        counter += 0;
      }
    });
    if (counter === 0) {
      new CounterParagraph(
        infoPendingSeries,
        "Congrats! You've watched all",
        "your series"
      );
    }
    new CounterParagraph(
      infoPendingSeries,
      "You have",
      "series pending to watch",
      counter
    );
  }
}

export default ContainerComponent;
