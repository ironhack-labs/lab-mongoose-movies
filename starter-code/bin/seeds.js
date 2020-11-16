const mongoose = require('mongoose')
const Movies = require('../models/movies.model')

const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)


const movies = [
  {
    title: 'Terminator 2: Judgment Day',
    genre: 'Action',
    plot: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son, John Connor, from a more advanced and powerful cyborg. Over 10 years have passed since the first machine called The Terminator tried to kill Sarah Connor and her unborn son, John.",
  },
  {
    title: 'Lethal Weapon',
    genre: 'Drama',
    plot: "A pair of mismatched LAPD detectives – Martin Riggs (Gibson), a former Green Beret who has become suicidal following the death of his wife, and Roger Murtaugh (Glover), a 50-year-old veteran of the force – work together as partners.",
  },
  {
    title: 'Goldfinger',
    genre: 'Fantasy',
    plot: "Investigating gold smuggling by gold magnate Auric Goldfinger and eventually uncovering Goldfinger's plans to contaminate the United States Bullion Depository at Fort Knox.",
  },
]


Movies
  .create(movies)
  .then(allMovies => {
    console.log(`Se han creado ${allMovies.length} movies`)
    mongoose.connection.close()
  })
  .catch(err => console.log('Hubo un error,', err))