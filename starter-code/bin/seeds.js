const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie')

mongoose
  .connect('mongodb://localhost/mongoose-celebrities', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

// let celebrities = [
//   {
//     name: "Rami Malek",
//     occupation: "Actor",
//     catchPhrase: "Hello, friend."
//   },
//   {
//     name: "Lizzo",
//     occupation: "Rap Artist",
//     catchPhrase: "I just took a DNA test"
//   },
//   {
//     name: "Amy Adams",
//     occupation: "Actress",
//     catchPhrase: "Amazing actress"
//   }
// ]

// Celebrity.create(celebrities);

let movies = [
  {
    title: "The Joker",
    genre: "Drama/Comic Book",
    plot: "New take on comic book Joker character",
    star: "Joaquin Phoneix"
  },
  {
    title: "Breaking Bad: El Camino",
    genre: "Drama",
    plot: "Extension of the Breaking Bad franchise",
    star: "Aaron Paul"
  },
  {
    title: "Arrival",
    genre: "Sci-Fi",
    plot: "Aliens visit earth. Humans go crazy.",
    star: "Amy Adams"
  }
]

Movie.create(movies);