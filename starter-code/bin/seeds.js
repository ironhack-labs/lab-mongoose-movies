const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model')

mongoose.connect('mongodb://localhost/mongoose-movies', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// const celebrities = [{
//   name: "Pablo Escobar",
//   occupation: "Hombre de negocios - Muerto",
//   catchPhrase: "Plata o plomo"
// }, {
//   name: "Carmen de Mairena",
//   occupation: "Actriz",
//   catchPhrase: "No importa el tamaño de la pieza, sino el tiempo que esté tiesa"
// }, {
//   name: "Belén Esteban",
//   occupation: "Princesa del pueblo",
//   catchPhrase: "Andreíta, cómete el pollo"
// }]

// Celebrity.create(celebrities, err => {
//   if (err) throw err
//   console.log(`Se han creado ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// })
const movies = [{
  title: 'Vagina dentada',
  genre: 'Terror',
  plot: 'Una mujer con dientes en su vagina la lia parda'
}, {
  title: 'Castores Zombies',
  genre: 'Terror',
  plot: 'Unos castores se meten mucha droga y empiezan a morder algo más que madera...'
}, {
  title: 'Sharknado',
  genre: 'Terror',
  plot: '¿Qué es peor que un tornado o que unos tiburones? ¡Tiburones dentro de un tornado!'
}]

Movie.create(movies, err => {
  if (err) throw err
  console.log(`Se han creado ${movies.length} peliculas`)
  mongoose.connection.close()
})