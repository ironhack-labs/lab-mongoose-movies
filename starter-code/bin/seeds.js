const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movies");

mongoose
  .connect("mongodb://localhost/starter-code", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

// const data = [
//   {
//     name: "Toni Sanchez",
//     occupation: "Dev student",
//     catchPhrase: "Cada loco con su meta",
//   },
//   {
//     name: "Unknown",
//     occupation: "Hacker",
//     catchPhrase: "01001000 01101111 01101100 01100001",
//   },
//   {
//     name: "Hasma Amigo",
//     occupation: "none",
//     catchPhrase: "مرحبا يا صديقي",
//   },
// ];

const movieData = [
  {
    title: "Movie 1",
    genre: "randomGenre",
    plot: "randomPlot",
  },
  {
    title: "Movie 2",
    genre: "randomGenre2",
    plot: "randomPlot2",
  },
  {
    title: "Movie 3",
    genre: "randomGenre3",
    plot: "randomPlot3",
  },
];

//Celebrity.create(data);
Movie.create(movieData);
