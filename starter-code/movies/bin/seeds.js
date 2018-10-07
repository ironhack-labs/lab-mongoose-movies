const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose.connect("mongodb://localhost:27017/movies", { useNewUrlParser: true });

const celebrities = [
  {
    name: "Batman",
    occupation: "Heroe",
    catchPhrase: "Robin, do you still love me?"
  },
  {
    name: "Robin",
    occupation: "Sidekick",
    catchPhrase: "Batman, do you still love me?"
  },
  {
    name: "Diana, the Hunter",
    occupation: "Fountain",
    catchPhrase: "Gotcha ;)"
  }
];

const movies = [
  {
    title: "Love",
    genre: "Drama",
    plot: "Batman's first love turned out to be his worst enemy."
  },
  {
    title: "CDMX's Best Tourist Attractions",
    genre: "Documentary",
    plot: "A review of the best tourist attractions in Mexico City."
  },
  {
    title: "Murder in la Roma",
    genre: "Mistery",
    plot: "Someone died of a poisoned latte. Now his son wants to bring justice."
  }
];

// Celebrity.create(celebrities, err => {
//   if (err) throw err;
//   console.log(`Se crearon ${celebrities.length} documentos`);
//   mongoose.connection.close();
// });

Movie.create(movies, err => {
  if (err) throw err;
  console.log(`Se crearon ${movies.length} documentos`);
  mongoose.connection.close();
});