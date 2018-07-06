const Celebrity = require('../models/celebrity');
const mongoose = require('mongoose');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const seedData = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'I sure do love Scientology!'
  },
  {
    name: 'Donald Trump',
    occupation: 'Orange Man',
    catchPhrase: 'CHIYNA!'
  },
  {
    name: 'Elon Musk',
    occupation: 'Businessman',
    catchPhrase: 'The humans, they enjoy this? Then I shall enjoy it as well.'
  }
];

Celebrity.create(seedData)
  .then((data) => {
    console.log('Successfully imported ' + data.length + ' items');
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
