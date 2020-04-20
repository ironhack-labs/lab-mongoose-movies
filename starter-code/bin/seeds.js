const Movie = require('../models/Movie')
const mongoose = require('mongoose')

const mockData = [
  {
    title: 'Rápidos y Furiosos 23',
    genre: 'Fantasía',
    plot: "Los rápidos y furiosos vaiajan en el tiempo para luchar contra los NAZI's",
  },
  {
    title: 'El Padrecito',
    genre: 'Comedia',
    plot: 'Un nuevo sacerdote ayuda a los habitantes de un pueblo gracias a las limosnas que recibe en su parroquia.',
  },
  {
    title: '2001: odisea del espacio',
    genre: 'Ciencia Ficción',
    plot: 'La supercomputadora HAL 9000 guía a un equipo de tres astronautas en un viaje en el que buscan descubrir los orígenes de la humanidad.',
  },
]

mongoose
  .connect('mongodb://localhost/starter-code', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const moviesCreated = await Movie.create(mockData)
    const { length } = moviesCreated
    console.log(`${length} movies created`)
    mongoose.connection.close()
  })
  .catch((err) => console.log('Something went wrong', err))
