/*jshint esversion: 6 */

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Sean Bean',
    occupation: 'Warden of the North',
    catchPhrase: 'Winter is Coming'
  },
  {
    name: 'Bugs Bunny',
    occupation: 'Being a Rabbit',
    catchPhrase: 'What\'s up Doc?'
  },
  {
    name: 'Charlie Chaplin',
    occupation: 'Actor',
    catchPhrase: '.......'
  },
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((product) => {
    console.log(product.name);
  });
  mongoose.connection.close();
});
