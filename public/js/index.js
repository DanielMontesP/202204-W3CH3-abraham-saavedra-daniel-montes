/* eslint-disable no-unused-vars */
import series from "./series/series.js";
import CardMovieComponent from "./componentes/CardMovieComponent.js";
import Component from "./componentes/Component.js";
import modArray from "./siteUtils.js";

const container = document.querySelector(".container");
const unWatchedSerieList = document.querySelector(".series-list");
const watchedSeriesList = document.querySelector(
  ".series-list.series-list--watched"
);

const createCard = (item, index, arr) => {
  const newCard =
    item.watched === true
      ? new CardMovieComponent(watchedSeriesList, item, item.id)
      : new CardMovieComponent(watchedSeriesList, item, item.id);
};

modArray("series", 1, "watched", true);
debugger;
console.log(series[1]);
series.forEach(createCard);
