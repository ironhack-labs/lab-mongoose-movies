const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebritiesdb', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: 'Ewan Mcgregor',
    occupation: 'Actor',
    catchPhrase: 'May the force be with you'
  },
  {
    name: 'Chesire',
    occupation: 'Cat',
    catchPhrase: 'We are all mad here'
  },
  {
    name: 'Elon Musk',
    occupation: 'Entrepreneur',
    catchPhrase: 'I would like to die on Mars, just not on impact'
  },
];

Celebrity.collection.drop();

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name);
  });

  mongoose.connection.close();
});
