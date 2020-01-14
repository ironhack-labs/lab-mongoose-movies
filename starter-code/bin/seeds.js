const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

Celebrity.collection.drop()
seed = [
  {
    name: 'Keanu Reaves',
    occupation: 'actor',
    catchPhrase: 'I know kung-fu',
  },
  {
    name: 'Robert Downey Jr.',
    occupation: 'actor',
    catchPhrase: 'I am ironman',
  },
  {name: 'Eichiiro Oda', occupation: 'manga writer', catchPhrase: 'DOM!'},
];

Celebrity.create(seed)
  .then(() => {
    console.log(`created ${seed.length} celebrities entries`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
