const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongMovies', {useMongoClient: true});
const Celebrities = require('../models/celebrity');

const famosos = [
  {
    name: 'Trump',
    occupation: 'Clown & president',
    catchPhrase: 'make america great again'

  },
  {
    name: 'Tess',
    occupation: 'Webpage creater',
    catchPhrase: 'Mogollon'
  },
  {
    name: 'Juan',
    occupation: 'Coffe taster at Starbucks',
    catchPhrase: 'Ostia'
  }
];

// Celebrities.collection.drop();

Celebrities.create(famosos, (err, docs) => {
  if (err) {
    throw err;
  }
console.log('seeding');
  mongoose.connection.close();
});
