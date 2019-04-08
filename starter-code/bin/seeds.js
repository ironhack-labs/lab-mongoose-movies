const Celebrity = require('../models/celebrity.model');
const mongoose = require('mongoose');

/*const celebrities = [
  {
  name: 'Jon', 
  occupation: 'actor',
  catchPhrase: 'Winter is Comming'
  }
];*/

const movies = [
    {
  title: 'Test', 
  genre: 'Suspense',
  plot: 'Guess the answers'
  }
];

Celebrity.create(celebrities)
  .then((celebrities) => console.info(`${celebrities.length} new celebrities added to the database`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close());

  Movie.create(movies)
  .then((movies) => console.info(`${movies.length} new movies added to the database`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close());