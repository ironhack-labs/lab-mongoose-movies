'use strict';

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: 'Phil Collins',
    occupation: 'Singer',
    catchPhrase: 'Cause you\'ll be in my heart'
  },
  {
    name: 'Laura Pausini',
    occupation: 'Singer',
    catchPhrase: 'Marco se ha marchado para no volver'
  },
  {
    name: 'Melendi',
    occupation: 'Singer',
    catchPhrase: 'Asturias es mi patria'
  }
];

Celebrity.create(celebrities)
  .then(() => {
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
  })
  .catch((err) => {
    throw (err);
  });
