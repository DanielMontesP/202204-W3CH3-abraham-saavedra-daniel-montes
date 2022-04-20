/* eslint-disable no-unused-vars */
import series from "./series/series.js";
import CardMovieComponent from "./componentes/CardMovieComponent.js";
import Component from "./componentes/Component.js";
import ContainerComponent from "./componentes/ContainerComponent.js";

const container = document.querySelector(".container");

const mainPage = new ContainerComponent(container);

const seriesList = series;

const createCard = () => {
  const unWatchedSerieList = document.querySelector(".series-list");

  const watchedSeriesList = document.querySelector(
    ".series-list.series-list--watched"
  );
  seriesList.forEach((serie) => {
    const newCard =
      serie.watched === true
        ? new CardMovieComponent(
            watchedSeriesList,
            serie,
            serie.id,
            serie.name,
            serie.creator,
            serie.poster
          )
        : new CardMovieComponent(
            unWatchedSerieList,
            serie,
            serie.id,
            serie.name,
            serie.creator,
            serie.poster
          );
  });
};
createCard();
