const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity-model.js");
const Movie = require("../models/movie-model.js");
mongoose
  .connect(
    "mongodb://localhost/lab-mongoose-movies",

    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// const celebrityData = [
//   { name: "Matroianni", occupation: "actor", catchPhrase: "never give up" },
//   { name: "Fellini", occupation: "director", catchPhrase: "never give up" },
//   { name: "Pino Danile", occupation: "musician", catchPhrase: "never give up" }
// ];

// Celebrity.create(celebrityData)
//   .then(celebrityDoc => {
//     console.log(`Created CELEBRITY ${celebrityDoc.length}`);
//   })
//   .catch(err => console.log("CELEBRITY NOT CREATED", err));
//
//
//
//
const movieData = [
  { title: "8½", genre: "Drama", plot: "Aaaaaaaaaaaaaa" },
  { title: "La Notte", genre: "Drama", plot: "Aaaaaaaaaaaaaa" },
  { title: "Jaws", genre: "Drama", plot: "Aaaaaaaaaaaaaa" }
];

Movie.create(movieData)
  .then(movieDoc => {
    console.log(`Created CELEBRITY ${movieDoc.length}`);
  })
  .catch(err => console.log("CELEBRITY NOT CREATED", err));
