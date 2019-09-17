const mongoose = require('mongoose');
const Celeb = require('../models/celebrity');


mongoose
  .connect('mongodb://localhost/celebrity', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));




let celebArray = [
  {
    name: 'Jennifer Muniz',
    occupation: 'Ironhack',
    catchPhrase: 'Oh no!'
  },

  {
    name: 'Spongebob Squarepants',
    occupation: 'Krusty Krab',
    catchPhrase: 'Who lives in a pineapple under the sea'
  },

  {
    name: 'Harry Potter',
    occupation: 'Auror',
    catchPhrase: 'Expelliarmus!'
  }
]


Celeb.create(celebArray);