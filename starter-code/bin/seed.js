const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);
Celebrity.collection.drop();
Movie.collection.drop();
/*
const celebrity = [{
    name: "Will Smith",
    occupation: "Actor",
    catchPhrase: "la frase de will",
  },
  {
    name: "Shakira",
    occupation: "Cantante",
    catchPhrase: "la frase de shakira",
  },
  {
    name: "Fernando Torres",
    occupation: "Futbolista",
    catchPhrase: "la frase de fernando",
  }
]

Celebrity.create(celebrity, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${celebrity.length} celebryties`)
  mongoose.connection.close();
});
*/

const movie = [{
    title: "Harry Potter",
    genre: "Drama",
    plot: "harry"
  },
  {
    title: "El señor de los anillos",
    genre: "Ficcion",
    plot: "anillos"
  },
  {
    title: "Dos tontos muy tontos",
    genre: "Comedia",
    plot: "tontos"
  }
]

Movie.create(movie, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${movie.length} movies`)
  mongoose.connection.close();
})