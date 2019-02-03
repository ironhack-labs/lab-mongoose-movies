const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'lab-mongoose-movies';

mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Ben Affleck',
    occupation: 'Actor',
    catchPhrase: 'I\'m batman!'
  },
  {
    name: 'Christian Bale',
    occupation: 'Actor',
    catchPhrase: 'I\'m real batman!'
  },
  {
    name: 'George Clooney',
    occupation: 'Actor',
    catchPhrase: 'I\'m the old batman!'
  }
];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
