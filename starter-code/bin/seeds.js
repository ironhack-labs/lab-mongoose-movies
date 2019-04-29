const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

// const dbName = "celebs";
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebs = [
//   {
//     name: "Whoopi Goldberg",
//     occupation: "Actor",
//     catchPhrase: "Say what?"
//   },
//   {
//     name: "Adam Sandler",
//     occupation: "Actor",
//     catchPhrase: "J.K. Rowling"
//   },
//   {
//     name: "Jack Black",
//     occupation: "Actor",
//     catchPhrase: "Va-poo-rize"
//   }
// ];

// Celebrity.create(celebs, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${celebs.length} celebrities`);
//   mongoose.connection.close();
// });

const dbName = "celebs";
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "Ghost",
    genre: "Drama",
    plot: "Ghost comes back for a killing"
  },
  {
    title: "Click",
    genre: "Comedy",
    plot: "Remote controls all"
  },
  {
    title: "School of Rock",
    genre: "Comedy",
    plot: "Bad teacher teaches great music"
  }
];

Movie.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
