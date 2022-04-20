import Component from "./Component.js";

class CardMovieComponent extends Component {
  serie;
  name;
  creator;
  poster;
  constructor(parentElement, serie, id, name, creator, poster) {
    super(parentElement, "li", `serie serie--${id}`);

    this.serie = serie;
    this.name = name;
    this.creator = creator;
    this.poster = poster;
    this.render();
  }

  render() {
    this.element.innerHTML = ` <img
                  class="serie__poster"
                  src=${this.poster}
                  alt="${this.name} poster"
                />
                <h4 class="serie__title">${this.name}</h4>
                <p class="serie__info">${this.creator} (1999)</p>
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
                <i class="fas fa-times-circle icon--delete icon--${this.id}"></i>`;
  }
}

export default CardMovieComponent;
