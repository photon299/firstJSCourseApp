"use strict";

//*
let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let firstWatchedMovie = prompt("Один из последних просмотренных фильмов?", ""),
    firstMovieRank = +prompt("На сколько вы оцените его?", ""),
    secondWatchedMovie = prompt("Один из последних просмотренных фильмов?", ""),
    secondMovieRank = +prompt("На сколько вы оцените его?", "");

personalMovieDB.movies[firstWatchedMovie] = firstMovieRank;
personalMovieDB.movies[secondWatchedMovie] = secondMovieRank;
console.log(personalMovieDB);