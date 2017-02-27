const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongooseMovies');

const CelebrityModel = require('../models/celebrities.js');

const celebrities = [
  {
    name: 'Donald Trump',
    occupation: 'President',
    catchPhrase: 'Hyooge!'
  },
  {
    name: 'Ronnie Coleman',
    occupation: 'Mr. Olympia',
    catchPhrase: 'Yeah Buddy!'
  },
  {
    name: 'Liam Neeson',
    occupation: 'Assassin',
    catchPhrase: 'I will find you...and I will kill you.'
  }
];

CelebrityModel.create(celebrities, (err, celebDocs) => {
  if (err) {
    next(err);
    return;
  }

  celebDocs.forEach((celebrity) => {
    console.log(`${celebrity.name}, ${celebrity.occupation}, ${celebrity.catchPhrase}`);
  });
});
