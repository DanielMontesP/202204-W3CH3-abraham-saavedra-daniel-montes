import DelItemArray from "../DelItemArray.js";
import { Series as SeriesCMComp } from "../series/series.js";
import Component from "./Component.js";

let idBtClose = "";
class CardMovieComponent extends Component {
  id;
  serie;
  name;
  creator;
  poster;
  deleted;
  constructor(parentElement, serie, id, name, creator, poster, deleted) {
    super(parentElement, "li", `serie serie--${id}`);

    this.id = id;
    this.serie = serie;
    this.name = name;
    this.creator = creator;
    this.poster = poster;
    this.deleted = deleted;
    this.render();
    this.addEvents();
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
                    <i class="icon--score fas fa-star" title="1/5"><a href="javascript:modArray(series,1,1)"></a></i>
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
    idBtClose = this.id;
  }

  addEvents() {
    const iconDelete = document.querySelector(".icon--" + idBtClose);
    iconDelete.addEventListener("click", function clikis() {
      let iconId = String(this.className);
      iconId = iconId.replace("fas fa-times-circle icon--delete icon--", "");

      DelItemArray(SeriesCMComp, "deleted", iconId - 1);
    });
  }
}

export default CardMovieComponent;
