/* eslint-disable no-unused-vars */
import series from "./series/series.js";
import CardMovieComponent from "./componentes/CardMovieComponent.js";
import Component from "./componentes/Component.js";

const watchedList = document.querySelector(
  ".series-list .series-list--watched"
);
const unWatchedList = document.querySelector(".series-list");

const seriesList = series;

series.forEach((serie) => {});
const theSopranos = new CardMovieComponent();
