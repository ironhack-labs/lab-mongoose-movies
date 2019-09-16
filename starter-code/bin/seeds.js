const mongoose = require("mongoose");
const Celebrities = require("./../models/Celebrities");
const celebritiesArr = [
  {
    name: "Bono",
    occupation: "Artist",
    catchPhrase: "1, 2, 3, 14"
  },
  {
    name: "Madonna",
    occupation: "singer",
    catchPhrase: "El tiempo pasa despacico",
  },
  {
    name: "Tim Berners",
    occupation: "Computer scientists",
    catchPhrase: "the world can be seen as only connections"
  }
];

mongoose
  .connect("mongodb://localhost/cinemongo", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    start();
    // process.exit(0);
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });


function start() {

  Celebrities.create(celebritiesArr)
    .then(addedCelebrities => {
      console.log(addedCelebrities)
      process.exit(0);
    })

    .catch(error => {
      console.log(error);
    });
}
function startMovies() {

  Movie.create(moviesArr)
    .then(addedMovie => {
      console.log(addedMovie)
      process.exit(0);
    })

    .catch(error => {
      console.log(error);
    });
}
const Movie = require("../models/Movies");
const moviesArr = [
  {
    title: "Enter the void",
    genre: "drama",
    plot: "Smoke, ghosts and crack"
  },
  {
    title: "Notre jour viendra",
    genre: "drama",
    plot: "Redheads are crazy"
  },
  {
    title: "Source Code",
    genre: "drama",
    plot: "An infinite loop"
  }
];
mongoose
  .connect("mongodb://localhost/cinemongo", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
    startMovies();
 
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });



