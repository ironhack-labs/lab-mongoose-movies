const { connect, connection } = require('mongoose')
const Movie = require('../models/Movie')

const data = [
  {
    title: 'El Lobo: Parte 2',
    genre: 'Aventura',
    plot:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor imperdiet dolor, vitae consectetur elit aliquam at. Vivamus justo nulla, aliquam id cursus id, sollicitudin sit amet sem. Suspendisse eleifend, massa eget ultrices placerat, diam lectus blandit dolor, ac consectetur massa sapien at sapien.'
  },
  {
    title: 'Pau vs Kary: La Revancha',
    genre: 'Acción',
    plot:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor imperdiet dolor, vitae consectetur elit aliquam at. Vivamus justo nulla, aliquam id cursus id, sollicitudin sit amet sem. Suspendisse eleifend, massa eget ultrices placerat, diam lectus blandit dolor, ac consectetur massa sapien at sapien.'
  },
  {
    title: 'Una de miedo',
    genre: 'Miedo',
    plot:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tempor imperdiet dolor, vitae consectetur elit aliquam at. Vivamus justo nulla, aliquam id cursus id, sollicitudin sit amet sem. Suspendisse eleifend, massa eget ultrices placerat, diam lectus blandit dolor, ac consectetur massa sapien at sapien.'
  }
]

connect('mongodb://localhost/lab-mongoose-movies')
  .then(async () => {
    const movies = await Movie.create(data)
    console.log(`${movies.length} movies created`)
    connection.close()
  })
  .catch(error => {
    console.log(error)
  })
