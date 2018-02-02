// Iteration #1
const mongoose = require('mongoose')

const Celebrity = require('../models/celebrity')
const Movie = require('../models/movie')

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/celebrities', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE
})

/* const celebrities = [
  {
    name: 'Mr. X',
    occupation: 'Actor',
    catchPhrase: 'Xaplamps'
  },
  {
    name: 'Rick Sanchez',
    occupation: 'Genius Scientist',
    catchPhrase: 'Wubba Lubba Dub Dub'
  },
  {
    name: 'Lord Puigdemoney',
    occupation: 'Awesome Lider',
    catchPhrase: 'Ola ke ase?'
  }
]

Celebrity.create(celebrities, (err, data) => {
  if (err) {
    throw err
  }
  console.log('Data Stored correctly')
  mongoose.connection.close()
})

*/

const movies = [
  {
    title: 'Mr. Xs adventure',
    genre: 'Action',
    plot: 'Xaplamps goes to town'
  },
  {
    title: 'Blrick & Blmorty',
    genre: 'Bladventures',
    plot: 'Wubba Lubba Dub Dub goes to town'
  },
  {
    title: 'Puigdemoney, cry me a river',
    genre: 'Passionate Romance Drama',
    plot: 'Ola ke ase? goes to town'
  }
]

Movie.create(movies, (err, data) => {
  if (err) {
    throw err
  }
  console.log('Data Stored correctly')
  mongoose.connection.close()
})
