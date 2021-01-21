const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movies.model')
const celebrityData = require('../data/celebrities.json');
const moviesData = require('../data/movies.json')

require('../config/db.config')

Movie.create(moviesData)
