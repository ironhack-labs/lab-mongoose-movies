const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');
const celebrities = require('./celebrity.data');
const movies = require('./movie.data');

require('../configs/db.config');

Celebrity.insertMany(celebrities)
    .then(() => {
        console.info('Seeds ok!!!');
        mongoose.connection.close();
    })
    .catch(error => {
        console.error('Seeding error: ',error);
        mongoose.connection.close();
    })

// Movie.insertMany(movies)
//     .then(() => {
//         console.info('Seeds ok!!!');
//         mongoose.connection.close();
//     })
//     .catch(error => {
//         console.error('Seeding error: ', error);
//         mongoose.connection.close();
//     })
