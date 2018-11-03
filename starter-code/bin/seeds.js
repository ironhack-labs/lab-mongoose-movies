const mongoose = require('mongoose');
const Movie = require('../models/movie');
const Celebrity = require('../models/celebrity');

const dbName = 'homeworkweek4';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebritys = [
  {
    name: "Anton",
    occupation: "artist",
    catchPhrase: "I can do anything",
  }, {
    name: "Claire",
    occupation: "author",
    catchPhrase: "I do not like movies",
  }, {
    name: "Emily",
    occupation: "singer",
    catchPhrase: "music is everything",
  }
]

const movies = [
  {
    title: "The Game",
    genre: "Thrille",
    plot: "The game ist on...",
  }, {
    title: "Once",
    genre: "Comedy",
    plot: "In a land far away...",
  }, {
    title: "Vampires Dance",
    genre: "Musical",
    plot: "Be ready for your death!",
  }
]

// Celebrity.create(celebritys)
//   .then(celebritys =>
//     console.log(`Created ${celebritys.length} celebritys`)
//   )

Movie.create(movies)
  .then(movies =>
    console.log(`Created ${movies.length} movies`)
  )