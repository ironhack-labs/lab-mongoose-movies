const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity-examples', {useMongoClient: true});
const Celebrity = require('../models/celebrity');

const celebrity = [
  {
    name: 'Angel',
    occupation: 'Mucha',
    catchPhrase: 'Cosas',
  },
  {
    name: 'Sirodey',
    occupation: 'Ironhacker',
    catchPhrase: 'Cosas',
  },
  {
    name: 'Alonso',
    occupation: 'Vago',
    catchPhrase: 'Cosas',
  }
];

Celebrity.collection.drop();

Celebrity.create(celebrity, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });

  mongoose.connection.close();
});