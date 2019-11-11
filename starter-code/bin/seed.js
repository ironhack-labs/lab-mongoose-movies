const mongoose = require("mongoose");
// const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// const celebrities = [
//   { name: "Tom Cruise", occupation: "actor", catchPhrase: "Hey I am an actor" },
//   { name: "Beyonce", occupation: "singer", catchPhrase: "Hey I am a singer" },
//   {
//     name: "Kim Kardashian",
//     occupation: "unknown",
//     catchPhrase: "Hey I am known"
//   }
// ];

// Celebrity.insertMany(celebrities)
//   .then(dbRes => console.log("All celebrities have been added"))
//   .catch(dbErr => console.log(`Err - ${dbErr}`));

const movies = [
  {
    title: "First movie",
    genre: "comedy",
    plot: "we'll have to define this"
  },
  {
    title: "Second movie",
    genre: "drama",
    plot: "we'll have to define this too"
  }
];

Movie.insertMany(movies)
  .then(dbRes => {
    console.log("All movies have been inserted");
  })
  .catch(dbErr => console.log(dbErr));
