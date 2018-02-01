const mongoose = require('mongoose');

// database setup
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/myCelebs', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
});

const Celebrity = require('../models/celebrity')

// bin/seeds.js
const celebs = [
  {
    name: 'Dr. Jean',
    occupation: 'Singer',
    catchPhrase: 'Peel the avocado. Guacamole. Guac-guacamole!'
  },
  {
    name: 'Hippokrates',
    occupation: 'Father of Medicine',
    catchPhrase: 'Let food be thy medicine and medicine be thy food'
  },
  {
    name: 'Max Mustermann',
    occupation: 'Mustermann',
    catchPhrase: 'Ich bin ein Muster'
  },
];

Celebrity.create(celebs, (err, docs) => {
  if (err) {
    throw err;
  }
  docs.forEach((celebs) => {
    console.log(celebs.name)
  });
  mongoose.connection.close();
});

celebs.export = Celebrity