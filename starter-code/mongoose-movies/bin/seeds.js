const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie')

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
  {
    title: String,
    genre: String,
    plot: String
  }
];

const movies = [
  {
      title: 'The Godfather',
      genre:'crime drama',
      plot: 'When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.'
  },
  {
        title: 'The Godfather: Part II',
        genre:'crime drama',
        plot: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.'
  },
  {
        title:'The Godfather: Part III',
        genre:'crime drama',
        plot: 'In the midst of trying to legitimize his business dealings in New York City and Italy in 1979, aging Mafia Don Michael Corleone seeks to avow for his sins, while taking his nephew Vincent Mancini under his wing.'
  },
];



Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebs`)
  mongoose.connection.close()
});


Movie.create(movies, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
});