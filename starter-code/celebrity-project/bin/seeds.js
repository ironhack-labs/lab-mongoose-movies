const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity');

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/celebrity-project', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!');
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const celebrities = [
  {
    name: 'Brad Pitt',
    occupation: 'Actor',
    catchPhrase: `I wish I could be sexy forever`,
  },

  {
    name: 'Angelina Jolie',
    occupation: 'Actress',
    catchPhrase: `I shouldn't have adopt that many kids`,
  },

  {
    name: 'Jennifer Aniston',
    occupation: 'Actress',
    catchPhrase: `Can someone love me ?`,
  },

  {
    name: 'Leonardo Di Caprio',
    occupation: 'Actor',
    catchPhrase: `I only date Victoria Secret's models`,
  },

  {
    name: 'Beyoncé',
    occupation: 'Queen',
    catchPhrase: `Who run the world ?`,
  },
];

Celebrity.create(celebrities)
  .then(() => {
    console.log(`Created ${celebrities.length} famous stars`);
  })
  .catch(err => {
    console.log(`Creation ERROOOOOR`, err);
  });
