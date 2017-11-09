const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab-mongoose-movies', {
  useMongoClient: true
});
const Celebrity = require('../models/celebrity');

Celebrity.collection.drop();

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'actor',
    catchPhrase: 'first',
  },
  {
    name: 'Beyonce',
    occupation: 'singer',
    catchPhrase: 'second',
  },
  {
    name: 'Daffy Duck',
    occupation: 'comedian',
    catchPhrase: 'third',
  },
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });

  mongoose.connection.close();
});
