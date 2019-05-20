const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

const dbName = 'celebrity-project-webmad0419'
mongoose.connect(`mongodb://localhost/${dbName}`);

// Celebrities

// const celebrities = [
//   {
//     name: "Quentin Tarantino",
//     occupation: "Actor",
//     catchPhrase: "Que me cuentin Tanrantino?"
//   },
//   {
//     name: "Macaulay Culkin",
//     occupation: "Actor",
//     catchPhrase: "Soy un juguete roto"
//   },
//   {
//     name: "Chuck Norris",
//     occupation: "Actor",
//     catchPhrase: "A mi siempre me ha gustado dar ostias como panes"
//   }
// ]

// Celebrity.create(celebrities)
//   .then(celebritiesCreated => {
//     console.log(`Creadas ${celebritiesCreated.length} celebridades`)
//     mongoose.connection.close()
//   })
//   .catch(err => console.log(`Hubo un error: ${err}`))


// Movies
const movies = [
  {
    title: "Ravatar",
    genre: "Action",
    plot: "La vida de un ser azul que da amor por doquier"
  },
  {
    title: "En el parque madrileño se me pone como un leño",
    genre: "Thriller",
    plot: "Garden Cruising"
  },
  {
    title: "Fui a por trabajo y me comieron lo de abajo",
    genre: "Thriller",
    plot: "La primera entrevista de trabajo que salió bien"
  }
]

Movie.create(movies)
  .then(moviesCreated => {
    console.log(`Creadas ${moviesCreated.length} peliculas`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`Hubo un error: ${err}`))
