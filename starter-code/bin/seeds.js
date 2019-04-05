const Celebrity = require('../models/celebrity.model');
const mongoose = require('mongoose');

//const movies = [title, genre, plot];

Celebrity.create(celebrities)
  .then((celebrities) => console.info(`${celebrities.length} new celebrities added to the database`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close());

  Movie.create(movies)
  .then((movies) => console.info(`${movies.length} new movies added to the database`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close());