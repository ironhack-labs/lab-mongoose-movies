const { connect, connection } = require('mongoose')
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

const data = [
  // {
  //   name: 'Vader',
  //   occupation: 'Lord Sith',
  //   catchPhrase: 'Yo soy tu padre'
  // },
  // {
  //   name: 'Tortuga',
  //   occupation: 'Maestro de sexualidad',
  //   catchPhrase: 'Aaahhh!!'
  // },
  // {
  //   name: 'C. Harina',
  //   occupation: 'Comandante',
  //   catchPhrase: 'Ay papantla, tus hijos vuelan!!'
  // }
  {
    title: 'Big Fish',
    genre: 'Fiction',
    plot: 'Un hombre mayor cuenta la historia de su vida, pero una forma muy increible e imaginaria'
  },
  {
    title: 'Back to the future',
    genre: 'Fiction',
    plot: 'El joven Marty McFly viaja al pasado en un Delorean, y busca la forma de volver a su epoca'
  },
  {
    title: 'Como conoci a su madre',
    genre: 'Romance, comedia',
    plot: 'Un hombre empieza a relatar la historia de como conocio a su esposa, pero la historia no sera nada como se imaginan'
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