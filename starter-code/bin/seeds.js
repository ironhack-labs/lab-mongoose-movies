const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity.model');
const celebrities = require('../data/celebrities.data');

const Movie = require('../models/movie.model');
const movies = require('../data/movies.data');

require('../configs/db.config');

Celebrity.create(celebrities)
    .then(celebrities => {
        console.info(`Charged ${celebrities.length} celebrities`)
        mongoose.connection.close();
    })
    .catch(error => {
        console.error('error: ', error)
        mongoose.connection.close();
    });

Movie.create(movies)
    .then(movies => {
        console.info(`Charged ${movies.length} movies`)
        mongoose.connection.close();
    })
    .catch(error => {
        next(error);
        mongoose.connection.close();
    })
