// const celebrity_list = [
//   {
//     name: "Mick Jagger",
//     occupation: "Rockstar",
//     catchPhrase: "Fuck"
//   },
//   {
//     name: "Bill Burr",
//     occupation: "Comedian",
//     catchPhrase: "Walk your way out"
//   },
//   {
//     name: "Michael Schumacher",
//     occupation: "Formule 1 Driver",
//     catchPhrase: "Beeeh"
//   }
// ];

const movie_list = [
  {
    title: "Titanic",
    genre: "Love Movie",
    plot: "Boat sinks"
  },
  {
    title: "Interstellar",
    genre: "Sci-Fi",
    plot: "In space you don't go old"
  },
  {
    title: "The Lion King",
    genre: "Kid Movie",
    plot: "Scar vs Muphassa"
  }
];

const mongoose = require("mongoose");
// const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

mongoose
  .connect("mongodb://localhost/mongoose-movies")
  .then(_ => {
    console.log("Je suis connecté");
    return Movie.create(movie_list);
  })
  .then(movies => {
    console.log(movies);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log("error", err);
    mongoose.connection.close();
  });
