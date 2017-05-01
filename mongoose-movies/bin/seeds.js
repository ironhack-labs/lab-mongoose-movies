const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongoose-movie');

const Celebrity = require('../models/celebrity-model');

const celebrities = [
  {
    name: 'Leslie Feist',
    occupation: 'Musician',
    catchPhrase: 'A man is not his song'
  },
  {
    name: 'Kristen Wiig',
    occupation: 'Actor',
    catchPhrase: 'Welcome to TARGET!'
  },
  {
    name: 'Will Ferrel',
    occupation: 'Comedian',
    catchPhrase: 'When in Rome'
  }
];

Celebrity.create(celebrities, (err, celebObj) => {
  if (err) {
    throw err;
  }

  celebObj.forEach( (oneCeleb) => {
    console.log(`Success! ${oneCeleb.name}`);
  });
});
