const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
  {
    name: 'Gollum',
    occupation: 'Hobbit',
    catchPhrase: 'My Precios'
  },
  {
    name: 'Darth Vader',
    occupation: 'Singer',
    catchPhrase: `I'm your father`
  },
  {
    name: 'Pikachu',
    occupation: 'Actor',
    catchPhrase: 'Pi-ka-chuuu!'
  }
];

const moviesSeed = [
  {
    title: 'The Lord of the Rings',
    genre: 'Fantasy',
    plot: 'One Ring to Rule them all'
  },
  {
    title: 'Pokemon',
    genre: 'Action',
    plot: 'gotta catch em all'
  },
  {
    title: 'Star Wars: the return of the jedi',
    genre: 'Fantasy',
    plot: 'The empire strikes back'
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});

Movie.create(moviesSeed)
  .then(() => {
    console.log(`Created ${moviesSeed.length} movies`);
    mongoose.connection.close()
  })
  .catch(err => {
    throw err;
  });