const mongoose = require("mongoose")
// const Celebrity = require('../models/celebrity.model');

// const celebrities = [
//   {
//     name: "Blanca Suarez",
//     occupation: "actress",
//     catchPhrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
//   {
//     name: "David Civera",
//     occupation: "singer",
//     catchPhrase: "Que la detengan, es una mentirosa, malvada y peligrosa. ",
//   },
//   {
//     name: "Rosalia ",
//     occupation: "singer",
//     catchPhrase: "Madre mía, Rosalía, bájale",
//   },
// ]


// const dbName = 'celebritiesDB';
// mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(x => console.log(`Conectado a Mongo! El nombre de la base de datos es "${x.connections[0].name}"`))
//   .catch(err => console.log(`Error en la conexión con la base de datos ${err}`))
//   .then(x => {
//     console.log(`Se han insertado ${celebrities.length} celebrities`)
//     return Celebrity.insertMany(celebrities)
//   })
//   .catch(err => console.log(`Error: ${err}`))
//   .finally(() => mongoose.disconnect())


const Movie = require('../models/movie.model');

const movies = [
  {
    title: "El Caballero Oscuro",
    genre: "Superhero",
    plot: "Batman is GOD, te kill you la life Joker",
  },
  {
    title: "IronMan",
    genre: "Superhero",
    plot: "Ironman is rich",
  },
  {
    title: "Grease",
    genre: "Romantic Comedian",
    plot: "You're the one that I want uh uh uh!",
  },
]


const dbName = 'moviesDB';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(x => console.log(`Conectado a Mongo! El nombre de la base de datos es "${x.connections[0].name}"`))
  .catch(err => console.log(`Error en la conexión con la base de datos ${err}`))
  .then(x => {
    console.log(`Se han insertado ${movies.length} movies`)
    return Movie.insertMany(movies)
  })
  .catch(err => console.log(`Error: ${err}`))
  .finally(() => mongoose.disconnect())

