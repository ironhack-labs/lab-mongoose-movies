const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/movie-dev");

const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

// const celebrities = [
//   {
//     name: "Cebel1",
//     occupation: "actor",
//     catchPhrase: "something1"
//   },
//   {
//     name: "Celeb2",
//     occupation: "top model",
//     catchPhrase: "something2"
//   },
//   {
//     name: "Celeb3",
//     occupation: "singer",
//     catchPhrase: "something3"
//   }
// ];

// Celebrity.create(celebrities, (err, docs) => {
//   if (err) {
//     next(err);
//   }

//   docs.forEach(celebrity => {
//     console.log(celebrity.name);
//   });
//   mongoose.connection.close();
// });

const movies = [
  {
    title: "les tuches 3",
    genre: "comedie",
    plot: "something1"
  },
  {
    title: "Ferdinand",
    genre: "animation",
    plot: "something2"
  },
  {
    title: "horse soldiers",
    genre: "guerre",
    plot: "something3"
  }
];

Movie.create(movies, (err, docs) => {
  if (err) {
    next(err);
  }

  docs.forEach(movie => {
    console.log(movie.title);
  });
  mongoose.connection.close();
});
