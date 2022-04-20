/* eslint-disable no-unused-vars */
import series from "./series/series.js";
import CardMovieComponent from "./componentes/CardMovieComponent.js";
import Component from "./componentes/Component.js";

const container = document.querySelector(".container");
const createCard = (item, index, arr) => {
  const newCard = new CardMovieComponent(container, item);
};
series.forEach(createCard);
