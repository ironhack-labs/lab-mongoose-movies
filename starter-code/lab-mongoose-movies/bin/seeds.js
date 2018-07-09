require("dotenv").config();

const mongoose = require("mongoose");
//const Celebritie = require('../models/celebritie');
const Movie = require("../models/movie");

const mongooseMovies = process.env.DBURL;
mongoose.connect(mongooseMovies);

// const celebrities = [
//   {
//     name: "Nicolas Cage",
//     occupation: "Actor",
//     catchPhrase: "Be careful about Giorgio",
//   },
//   {
//     name: "Javier Bardem",
//   occupation: "Actor",
//   catchPhrase: "Looking for a bad one character, take me",
//   },
//   {
//     name: "Penelope Cruz",
//     occupation: "Actress",
//     catchPhrase: "The beauty...",
//   },
// ]

// Celebritie.collection.drop();
// //Comment.collection.drop();

// Celebritie.create(celebrities, (err, data) => {
//   if (err) { throw(err) }

//   console.log(`Created ${celebrities.length} celebs!`);
// });

const movies = [
  {
    title: "Back to the Future",
    genre: "Science Fiction",
    plot: "A mad scientist sends his to the past"
  },

  {
    title: "Spiderman2",
    genre: "Adventures",
    plot:
      "A teenager with habilities facing the bad ones in the city of New York"
  },

  {
    title: "Last Jedi",
    genre: "Adventures",
    plot: "Last movie of an epic saga"
  }
];

Movie.collection.drop();

Movie.create(movies, (err, data) => {
  if (err) {
    throw err;
  }

  console.log(`Created ${movies.length} movies!`);
});
