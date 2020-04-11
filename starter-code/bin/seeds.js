// bin/seeds.js

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const DB_NAME = 'celebrityDB';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation:
      'actor',
    catchPhrase: 'Mission impossibe'
  },
  {
    name: 'Damaris Gobels',
    occupation:
      'unknown',
    catchPhrase: 'oh man!'
  },
  {
    name: 'Taylor Swift',
    occupation:
      'singer',
    catchPhrase: ''
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});