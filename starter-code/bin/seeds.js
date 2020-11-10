// bin/seeds.js
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');
const Movies = require('../models/Movies.js');
const DB_NAME = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


/*
const celebrities = [
  {
    name: 'Arnold Schwarzenegger',
    occupation: 'Actor',
    catchPhrase: 'I\'ll be back',
  },
  {
    name: 'Sylvester Stallone',
    occupation: 'Actor',
    catchPhrase: 'Yoo, Adrian!',
  },
  {
    name: 'Dark Helmet',
    occupation: 'Darth Vader Wannabe',
    catchPhrase: 'Evil will always triumph because good is dumb',
  },

];
*/


const movies = [
  {
    title: 'Spaceballs',
    genre: 'Comedy',
    plot: 'Star Wars parody'
  },
  {
    title: 'Last Action Hero',
    genre: 'Action',
    plot: 'Schwarzenegger is Jack Slater.'
  },
];

/*
Celebrity.create(celebrities)
  .then(allCelebs => {
    console.log(`Created ${allCelebs.length} celebrities`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));
*/

  Movies.create(movies)
    .then(allMovies => {
      console.log(`Created ${allMovies.length} movies`);
      mongoose.connection.close();
    })
    .catch(err => console.log(`An error occured while creating movies from the DB: ${err}`));