const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity'); // Import of the model Recipe from './models/Recipe'

const data = [
  {
    name: 'Keanu Reeves',
    occupation: 'Actor',
    catchPhrase: 'The One',
  },
  { 
    name: 'Liam Neeson',
    occupation: 'Actor',
    catchPhrase: '',
  },
  {
    name: 'Arnold Schwarzenegger',
    occupation: 'Actor',
    catchPhrase: 'I am the one',
  },
];

// Connection to the database "recipeApp"
mongoose.connect('mongodb://localhost/lab-mongo-movies', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });


// Celebrity.insertMany(data)
//   .then((celebritys) => {
//     console.log(celebritys);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Celebrity.deleteMany()
//   .then((celebritys) => {
//     console.log(celebritys);
//     mongoose.disconnect();
//   })
//   .catch((err) => {
//     console.log(err);
//   });


