const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model')
 
// const DB_NAME = 'Express-celebs';

const DB_NAME = 'Express-movies';

 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});




// const celebrities = [

// {
//     name: "Xixarito",
//     occupation: "Wine-Maker",
//     catchPhrase: "La vida es irreal"
// },

// {
//     name: "Lola Flores",
//     occupation: "Singer",
//     catchPhrase: "Si me queréis, irse"
// },

// {
//     name: "Chiquito",
//     occupation: "Comedian",
//     catchPhrase: "Jarl"
// },

// ]

// Celebrity.create(celebrities)
//   .then(celebritiesFromDB => {
//     console.log(`Created ${celebritiesFromDB.length} celebrities`);
 
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(`An error occurred while creating celebrities' DB: ${err}`));

const movies = [
  {
    title: 'Let me in',
    genre: 'Horror',
    plot: 'Friendship between a vampire and a kid'
  },

  {
    title: 'Get out',
    genre: 'Horror',
    plot: 'A man will meet the family of her girlfriend. They have a secret agenda for the weekend '
  },

  {
    title: 'Gone',
    genre: 'Thriller',
    plot: 'A woman disappears misteriously and the husband in blame for it'
  }
]

Movie.create(movies)
  .then(moviesFromDB => {
    console.log(`Created ${moviesFromDB.length} movies`);
 
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating movies' DB: ${err}`));