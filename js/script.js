"use strict";

let numberOfFilms;

const start = () => {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
};
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const rememberMyFilms = () => {
    for(let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt("На сколько вы оцените его?", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
        } else {
            console.log("Error");
            i--;
        }
    }
};
// rememberMyFilms();

const detectPersonalLevel = () => {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Error");
    }
};
// detectPersonalLevel();

const showMyDB = (hidden) => {
    if (!hidden) {
        console.log(personalMovieDB);
    }
};
showMyDB(personalMovieDB.privat);

const writeYourGenres = () => {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
};
// writeYourGenres();