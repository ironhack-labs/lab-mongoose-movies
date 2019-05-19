const mongoose = require('mongoose');
const celebrity = require('../models/celebrity')
const movie = require('../models/movie')

const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Jesulín de Ubrique",
    occupation: "Torero",
    catchPhrase: "Im-prezionante"
  },
  {
    name: "Kiko Rivera aka Parquirrín",
    occupation: "Hijo de torero",
    catchPhrase: "Oooooo"
  },
  {
    name: "Santiago Segura",
    occupation: "Actor, guinista, director...",
    catchPhrase: "Yo que se..."
  }
]

const movies = [
  {
    title: "Torrente 1",
    genre: "Acción",
    plot: "Un señor gordo y feo es un heroe salva patrias"
  },
  {
    title: "Torrente 2",
    genre: "Acción",
    plot: "Un señor gordo y feo es un heroe salva patrias"
  },
  {
    title: "Torrente 3",
    genre: "Acción",
    plot: "Un señor gordo y feo es un heroe salva patrias"
  }
]

celebrity.create(celebrities)
  .then(celebritiesCreated => {
    console.log(`**** Creados ${celebritiesCreated.length} celebrities **** `)
    mongoose.connection.close()
  })
  .catch(err => console.log(`**** ! Hubo un error: ${err}`))

movie.create(movies)
.then(moviesCreated => {
  console.log(`**** Creados ${moviesCreated.length} movies **** `)
  mongoose.connection.close()
})
.catch(err => console.log(`**** ! Hubo un error: ${err}`))