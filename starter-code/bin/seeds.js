const celebrities = require('../data');
const Celebrity = require('../models/Celebrity.model');
const mongoose = require('mongoose');
const DB_NAME = 'movies-app';

mongoose.connect(`mongodb://localhost/${DB_NAME}`)
  .then(() => {
    console.log('Connected to database only to create the first information');

    Celebrity.insertMany(celebrities)
      .then(celebrities => {
        console.log(`${celebrities.length} inserted.`)
      })
  })
  .catch(error => console.error(error))
