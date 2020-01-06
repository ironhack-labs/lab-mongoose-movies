const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

seed = [
  {
    name: 'Keanu Reaves',
    occupation: 'actor',
    catchPharase: 'I know kung-fu',
  },
  {
    name: 'Robert Downey Jr.',
    occupation: 'actor',
    catchPharase: 'I am ironman',
  },
  {name: 'Eichiiro Oda', occupation: 'manga writer', catchPharase: 'DOM!'},
];

Celebrity.create(seed)
  .then(() => {
    console.log(`created ${seed.length} celebrities entries`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
