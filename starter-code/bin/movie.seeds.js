const mongoose = require('mongoose');
const Movie = require('../models/movie.model');
require("../app")

const movies = [
    { title: 'Simpsons', genre:'cartoon', plot: 'never ending story of yellow chars' },
    { title: 'The mist', genre: 'thriller', plot: 'wait for it'},
    { title: 'Big fish', genre: 'magical', plot: 'Lives wonderful' }
  ];


Movie.create(movies)
    .then(movieFromDB => {
        console.log(`created ${movieFromDB.length} movie`);
        mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating movie from DB: ${err}`));