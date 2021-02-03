const mongoose = require('mongoose');
const Celebrities = require('../models/Celebrity-model');

require('../configs/db.config');

const celebrities = [
  {
    name: 'Katarina',
    occupation: 'actress',
    catchPhrase: 'You catch me baby!'
  },
  {
    name: 'Arnold',
    occupation: 'actor',
    catchPhrase: 'Asta la vista baby!'
  },
  {
    name: 'Vanessa',
    occupation: 'movieMaker',
    catchPhrase: 'Do it now bro!'
  }
];

Celebrities.create(celebrities)
  .then(result => {
    console.log(`Created ${result.length} celebrities`);
    mongoose.connection.close()
  })
  .catch(err => console.log(`An error occurred while creating celebrities in the DB: ${err}`));