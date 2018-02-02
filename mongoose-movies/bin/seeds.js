const mongoose = require('mongoose');

// database setup
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/myCelebs', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
});

const Celebrity = require('../models/celebrity');

// bin/seeds.js
// array of objects

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
  }
];

// if outside of callback, code would be run,
// after the error it would stop
Celebrity.create(celebs, (err, savedCelebrities) => {
  if (err) {
    throw err;
  }
  savedCelebrities.forEach((theCelebrity) => {
    console.log(`${theCelebrity.name} ${theCelebrity._id}`);
  });
  mongoose.disconnect();
});

celebs.export = Celebrity;
