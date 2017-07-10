const mongoose = require('mongoose');

const CelebrityModel = require('../models/celebrity-model.js');

const MovieModel = require('../models/movie-model.js');

mongoose.connect("mongodb://localhost/movieDb");

const celebrityArray = [
  {
    name: "Donald Trump",
    occupation: "President",
    catchPhrase: "Something, something, China"
  },
  {
    name: "Nizar",
    occupation: "Instructor",
    catchPhrase: "I like pizza."
  },
  {
    name: "Dwight Schrute",
    occupation: "Manager",
    catchPhrase: "False..."
  },
];

const movieArray = [
  {
    title: "Lord of the Rings",
    genre: "Fantasy",
    plot: "Some short dude has to throw a ring in a volcano"
  },
  {
    title: "Star Wars",
    genre: "Sci-Fi",
    plot: "Planets get blown up, son finds out his father is a bad guy."
  },
  {
    title: "Harry Potter",
    genre: "Fantasy",
    plot: "Kid finds out he is wizard, school gets nearly destroyed every year."
  }
];

CelebrityModel.create (
  celebrityArray,
  (err, celebrityInfo) => {
    if(err) {
      console.log("error");
    }

    else {
      celebrityInfo.forEach((oneCelebrity) => {
        console.log(oneCelebrity.name + " has been added to the database");
      });
    }
  }
);

MovieModel.create (
  movieArray,
  (err, movieInfo) => {
    if (err) {
      console.log("error");
    }
    else {
      movieInfo.forEach((oneMovie) => {
        console.log(oneMovie.title + " has been added to the database.");
      });
    }
  });
