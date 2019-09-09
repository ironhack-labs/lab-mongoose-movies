const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')
const dbName = 'celebrities'
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [
  {
    name: 'Woddy Harrelson',
    occupation: 'Actor',
    catchPhrase:
      'In this world that is spinning madly out of control, we have to realize that we’re all related. We have to try to live harmoniously'
  },
  {
    name: 'Joaquin Phoenix',
    occupation: 'Actor',
    catchPhrase: 'It takes nothing away from a human to be kind to an animal'
  },
  {
    name: 'Moby',
    occupation: 'Musician',
    catchPhrase:
      'Could you look an animal in the eyes and say to it, ‘My appetite is more important than your suffering'
  }
]

Celebrity.create(celebrities, err => {
  if (err) {
    throw err
  }

  console.log(`${celebrities.length} "celebrities" created`)
  mongoose.connection.close()
})

const Movie = require('../models/Movie')
const dbName = 'celebrities'
mongoose.connect(`mongodb://localhost/${dbName}`)

const movies = [
  {
    title: 'V for Vendetta',
    genre: 'Action',
    plot: 'Remember remember the fifth of November'
  },
  {
    title: 'Remember the Titans',
    genre: 'Drama/Sports',
    plot: 'College football in Georgia'
  },
  {
    title: 'John Wick',
    genre: 'Action',
    plot: 'Don´t mess with my dog and car'
  }
]

Movie.create(movies, err => {
  if (err) {
    throw err
  }
  console.log(`${movies.length} "movies" created`)
  mongoose.connection.close()
})
