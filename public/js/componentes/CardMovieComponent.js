import Component from "./Component.js";

class CardMovieComponent extends Component {
  serie;
  constructor(parentElement, serie, id) {
    super(parentElement, "li", `serie serie--${id}`);
    this.serie = serie;

    this.render();
  }

  render() {
    this.element.innerHTML = ` <img
                  class="serie__poster"
                  src=${this.serie.poster}
                  alt="${this.serie.name} poster"
                />
                <h4 class="serie__title">${this.serie.name}</h4>
                <p class="serie__info">${this.serie.creator} (1999)</p>
                <ul class="score">
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="1/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="2/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="3/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="4/5"></i>
                  </li>
                  <li class="score__star">
                    <i class="icon--score fas fa-star" title="5/5"></i>
                  </li>
                </ul>
                <i class="fas fa-times-circle icon--delete-${this.serie.id}"></i>`;
  }
}

export default CardMovieComponent;
