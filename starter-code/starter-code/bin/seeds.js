require('dotenv').config();

const mongoose  = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie     = require('../models/movie');

mongoose.connect(`mongodb://localhost/lab-mongoose-movies`);

const celebrities = [
  {
    name: 'Paco Porras',
    occupation: 'Actor',
    catchPhrase: 'lolo'
  },
  {
    name: 'Carmen de Mairena',
    occupation: 'Señora',
    catchPhrase: 'Como soy una mujer incensurable, follo de una forma inimaginable.'
  },
  {
    name: 'Javier Cansado',
    occupation: 'Comedian',
    catchPhrase: 'no se puede resumir su esencia en una frase'
  }
]

Celebrity.collection.drop()

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});

mongoose.connect(`mongodb://localhost/lab-mongoose-movies`);

const movies = [
  {
    title: 'Karate a muerte en Torremolinos',
    genre: 'Comedy',
    plot: 'El nombre es descriptivo'
  },
  {
    title: 'El hombre centipedo-1',
    genre: 'Horror',
    plot: 'Un ciempies de personas'
  },
  {
    title: 'El hombre centipedo-2',
    genre: 'Horror',
    plot: 'Un ciempies de personas version 2'
  }
]

Movie.collection.drop()

Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});
