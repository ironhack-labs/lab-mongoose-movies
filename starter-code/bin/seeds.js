const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

const DB_NAME = 'celebrity-dev';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const celebs = [{
//         name: "Eddie Murphy",
//         occupation: "Comedian",
//         catchPhrase: "I will blow your face clean off your face!",
//     },
//     {
//         name: "Kim Kardashian",
//         occupation: "Media personality",
//         catchPhrase: "Honey, would you put a bumper sticker on a Bentley?",
//     },
//     {
//         name: "Jim Carrey",
//         occupation: "Actor",
//         catchPhrase: "If I'm not back in five minutes...just wait longer...",
//     },
// ]

// Celebrity.create(celebs)
//   .then(celebsFromDB => {
//     console.log(`Created ${celebsFromDB.length} celebs`);

//     // Once created, close the DB connection
//     mongoose.connection.close();
//   })
//    .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));

const movies = [{
    title: "Shrek",
    genre: "Animation",
    plot: "Green ogre falling in love",
  }, 
  {
    title: "Braveheart",
    genre: "War",
    plot: "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England",
  }, 
  {
    title: "Lord of the Rings",
    genre: "fantasy",
    plot: "The Fellowship of the Ring embark on a journey to destroy the One Ring and end Sauron's reign over Middle-earth.",
  },
]

Movie.create(movies)
.then(moviesFromDB => {
  console.log(`Created ${moviesFromDB.length} movies`)

  mongoose.connection.close()
})
.catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));