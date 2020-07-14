const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');
require('../configs/db.config');

const movies = [
  {name: 'The Lord of the Rings',
   genre: 'Fantasy',
   plot: 'Little people sneak around with jewellery whilst the country is in turmoil'
  },

  {
    name: 'Lord of the Flies',
    genre: 'Drama',
    plot: 'A group of school children is dissatisfied with field day destination and decide to hold elections for class representative'
  },

  {
    name: 'No Country for Old Men',
    genre: 'Crime',
    plot: 'A veteran soldier has a struggling relationship with his teenage wife while being chased by a man with an unusual haircut'
  }
];


Movie.deleteMany({})
    .then(Movie.create(movies))
    .then(() => {
        console.log('Created registers correctly');
        mongoose.connection.close();
    })
    .catch(e => console.error(e));