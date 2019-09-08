const mongoose = require('mongoose')
const Celebrity = require('./../models/Celebrity')
const Movie = require('./../models/Movie')

const celebrities = [
  {
    name: 'Woody',
    occupation: 'Sherift',
    catchPhrase: 'Alguien enveneno el abrevadero'
  },
  {
    name: 'Mario',
    occupation: 'Plumber',
    catchPhrase: 'Mamma mia!'
  },
  {
    name: 'Pikachu',
    occupation: 'unknown',
    catchPhrase: 'Pika Pika'
  }
]

const movies = [
  {
    title: 'Woody en el espacio',
    genre: 'Triller',
    plot: 'Woody muere'
  },
  {
    title: 'Detective Pikachu',
    genre: 'Comedy',
    plot: 'Rayan Raynor'
  },
  {
    title: 'Titanic',
    genre: 'Drama de 84 años',
    plot: 'Everybody DIIIIES'
  }
]

mongoose
  .connect('mongodb://localhost/celebrities', { useNewUrlParser: true })
  .then(async () => {
    const celebritiesCreated = await Celebrity.create(celebrities)
    console.log(`${celebritiesCreated.length} celebrities were created`)
    const createdMovies = await Movie.create(movies)
    console.log(`${createdMovies.length} movies were created`)
    mongoose.connection.close()
  })
  .catch(e => console.log(e))
