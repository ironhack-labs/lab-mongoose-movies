'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Celebrity 1',
    occupation: 'Occupation 1',
    catchPhrase: 'Keeps your knees safe, slip proof, sweat proof. Top of the line',
  },
  {
    name: 'Celebrity 2',
    occupation: 'Occupation 2',
    catchPhrase: 'Large enough for even the heaviest gamer. Crisp, fresh, no dead pixels guarantee',
  },
  {
    name: 'Celebrity 3',
    occupation: 'Occupation 3',
    catchPhrase: 'You never have to leave your computer! All you can eat nutrition!',
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});
