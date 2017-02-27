const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebDB');

const Celebrity = require('../models/celebModel.js');

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'Cruise with me!'
  },
  {
    name: 'Angelina Jolie',
    occupation: 'Actress',
    catchPhrase: 'Brad, the kids are living with me!'
  },
  {
    name: 'Daniel Radcliff',
    occupation: 'Actor',
    catchPhrase: 'Adaba Kadabra'
  }
];

//insertMany()
Celebrity.create(celebrities, (err, result) => {
  if (err) {
    next(err);
    return;
  }

  result.forEach((oneCeleb) => {
    console.log(`name = "${oneCeleb.name}", \n`);
  });

  mongoose.disconnect();
});
