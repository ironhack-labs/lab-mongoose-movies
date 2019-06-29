require('dotenv').config()
const mongoose = require('mongoose')
const Movie = require('../models/Movie')

const movies = [
  {
    title: 'Pulp Fiction',
    genre: 'comedy',
    plot: 'action movie'
  },
  {
    title: 'Mujeres al borde de un ataque de nervios',
    genre: 'comedy',
    plot: 'Histerismo cañí'
  },
  {
    title: 'Macario',
    genre: 'drama',
    plot: 'Life and death'
  }
]

mongoose.connect(process.env.DB)

const createMovies = Movie.create(movies)
  .then(results => {
    console.log('Movies created')
    mongoose.connection.close()
  })
  .catch(err => {
    console.log('Error creating movies', err)
    mongoose.connection.close()
  })
