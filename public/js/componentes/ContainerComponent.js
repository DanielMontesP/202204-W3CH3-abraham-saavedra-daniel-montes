import Component from "./Component.js";

class ContainerComponent extends Component {
  pendingList;
  watchedList;
  constructor(parentElement, pendingList, watchedList) {
    super(parentElement, "div", "container");
    this.pendingList = pendingList;
    this.watchedList = watchedList;

    this.render();
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
  }
}

export default ContainerComponent;
