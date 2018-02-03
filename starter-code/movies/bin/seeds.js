// bin/seeds.js
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/moviesdb", {
  useMongoClient: true
});
// const Celebrity = require("../models/celebrity");

// const celebrities = [
//   {
//     name: "Celebrity1",
//     occupation: "Occupation1",
//     catchPhrase: "CP1"
//   },
//   {
//     name: "Celebrity2",
//     occupation: "Occupation2",
//     catchPhrase: "CP2"
//   },
//   {
//     name: "Celebrity3",
//     occupation: "Occupation3",
//     catchPhrase: "CP3"
//   }
// ];

// Celebrity.create(celebrities, (err, docs) => {
//   if (err) {
//     throw err;
//   }

//   docs.forEach(celebrity => {
//     console.log(celebrity.name);
//   });
//   mongoose.connection.close();
// });

const Movie = require("../models/movie");

const movies = [
  {
    title: "Title1",
    genre: "Genre1",
    plot: "Plot1"
  },
  {
    title: "Title2",
    genre: "Genre2",
    plot: "Plot2"
  },
  {
    title: "Title3",
    genre: "Genre3",
    plot: "Plot3"
  }
];

Movie.create(movies, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach(movie => {
    console.log(movie.title);
  });
  mongoose.connection.close();
});
