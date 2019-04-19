const Movie = require('../../models/movie');
const movies = require('../../data/movies.json')

require('../../app.js');

Movie.create(movies)
  .then(movies => console.log('movies imported to DB'))
  .catch(error => console.log('error importing DB', error))
  