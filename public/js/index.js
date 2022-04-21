/* eslint-disable no-unused-vars */
import series from "./series/series.js";
import CardMovieComponent from "./componentes/CardMovieComponent.js";
import ContainerComponent from "./componentes/ContainerComponent.js";

const container = document.querySelector(".container");
const mainPage = new ContainerComponent(container);

const createCard = () => {
  const unWatchedSerieList = document.querySelector(".series-list");
  const watchedSeriesList = document.querySelector(
    ".series-list.series-list--watched"
  );
  const seriesList = [...series.series, { deleted: false }];

  seriesList.forEach((serie) => {
    debugger;
    new CardMovieComponent(
      serie.watched ? watchedSeriesList : unWatchedSerieList,
      serie,
      serie.id,
      serie.name,
      serie.creator,
      serie.poster,
      serie.deleted
    );
  });
};

//modArray(series, 1, "watched", true);

createCard();
