const mongoose = require('mongoose');
const dbName = 'CMdatabaseRob'

mongoose.connect(`mongodb://localhost/${dbName}`)

//Models
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');

Celebrity.collection.drop()
Movie.collection.drop()

// Celebrities

const celebrities = [
  {
    name: 'German Alvarez',
    occupation: 'Lead Teacher',
    catchPhrase: 'No vamos a abrir ese melon todavia'
  },
  {
    name: 'Enrique Montaño',
    occupation: 'Teacher Assistant',
    catchPhrase: 'Yo creo que esto lo van a terminar rapido'
  }, {
    name: 'Dayan Rojas',
    occupation: 'Teacher Assistant',
    catchPhrase: 'Esto esta muy facil chicos'
  },
]

Celebrity.create(celebrities)
.then(() => {
  console.log(`${celebrities.length} celebrities have been created`)
  mongoose.connection.close();
})
.catch(err => console.log('There was an error creating the celebrities', err))

const movies = [
  {
    title: 'Cosas del Covid',
    genre: 'Accion',
    plot: 'Empezaste un bootcamp lleno de ilusion sin saber lo que te espera'
  },
  {
    title: 'El gran engaño',
    genre: 'Comedia',
    plot: 'Has terminado el primer proyecto y crees que te vas a comer el mundo'
  }, {
    title: 'El BackEnd Contraataca',
    genre: 'Drama',
    plot: 'Te has venido arriba, ¿Verdad?. Sonrie... Mañana sera peor'
  },
]

Movie.create(movies)
.then(() => {
  console.log(`${movies.length} movies have been created`)
  mongoose.connection.close();
})
.catch(err => console.log('There was an error creating the movies', err))