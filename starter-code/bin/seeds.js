
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies = [
  {
    title: 'Movie1',
    genre: 'comedy',
    plot: 'jsdsufgdsuighduihg ksdivdobjfdobmfbkofkhodfjhbiadud'
  },

  {
    title: 'Movie2',
    genre: 'drama',
    plot: 'jynxcjxggz hsfgdsugvudishgvuisdg'
  },

  {
    title: 'Movie3',
    genre: 'triller',
    plot: 'xnviog djishvuisdhuvwrg sifhsduigfudhgvufdhgufd'
  }

]



Movie.create(movies) // Model.create(collection)
  .then(moviesFromDB => { // moviesFromDB is a placeholder and stands for an array
    console.log(`Created ${moviesFromDB.length} movies`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));







/* const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  {
    name: 'Meryl Streep',
    occupation: 'actress',
    catchPhrase: 'The formula of happiness and success is just being actually yourself, in the most vivid possible way you can.'
  },

  {
    name: 'Oprah Winfrey',
    occupation: 'talkshow moderator',
    catchPhrase: 'Surround yourself only with people who are going to take you higher.'
  },

  {
    name: 'Jennifer Aniston',
    occupation: 'actress',
    catchPhrase: 'Once you figure out who you are and what you love about yourself, I think it all kind of falls into place.'
  }
];


Celebrity.create(celebrities) // Model.create(collection)
  .then(celebritiesFromDB => { // celebritiesFromDB is a placeholder and stands for an array
    console.log(`Created ${celebritiesFromDB.length} celebrities`);

    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`)); */