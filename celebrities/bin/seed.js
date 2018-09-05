const mongoose = require("mongoose");
const Movie = require("../models/movie.js");
//const Celebrity = require("../models/celebrity.js");

mongoose.Promise = Promise;
mongoose
  .connect(
    "mongodb://localhost/celebrities",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(`Connected to Mongo!`);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// const celebrityData = [
//   {
//     name: "a",
//     occupation: "a",
//     catchPhrase: "a"
//   },
//   {
//     name: "b",
//     occupation: "b",
//     catchPhrase: "b"
//   },
//   {
//     name: "c",
//     occupation: "c",
//     catchPhrase: "c"
//   }
// ];

// Celebrity.create(celebrityData)
//   .then(celebrityResult => {
//     console.log(`inserted ${celebrityResult.length} celebrities`);
//   })
//   .catch(err => {
//     console.log(`failureeeee`, err);
//   });

const movieData = [
  {
    title: "Skyscrapper",
    genre: "action",
    plot:
      "Global icon Dwayne Johnson leads the cast of Legendary's SKYSCRAPER as former FBI"
  },
  {
    title: "",
    genre: "",
    plot: ""
  },
  {
    title: "",
    genre: "",
    plot: ""
  }
];

Movie.create(MovieData)
  .then(movieResult => {
    console.log(`inserted ${movieResult.length} movies`);
  })
  .catch(err => {
    console.log(`failureeeee`, err);
  });
