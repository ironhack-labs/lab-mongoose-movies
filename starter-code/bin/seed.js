const mongoose = require("mongoose")
const Celebrity = require("../models/celebrity-model")
const Movie = require("../models/movie-model")

const dbName = 'celebrity-CRUD-database';
mongoose.connect(`mongodb://localhost/${dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const celebrities = [{
    name: "Ace Ventura",
    ocupation: "Pet Detective",
    catchPhrase: "Puesssss mira que bien"
  },
  {
    name: "Luke Skywalker",
    ocupation: "Jedi Master",
    catchPhrase: "Siento una perturbacion en la fuerza"
  },
  {
    name: "Ramona Flowers",
    ocupation: "Amazon Deliver",
    catchPhrase: "Solo fue una fase"
  }
]

Celebrity.create(celebrities)
  .then(allCelebrities => {
    console.log(`${allCelebrities.length} celebrities created on Database`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`An error ocurred: ${err}`))

const movies = [{
  title: "Star Wars I",
  genre: "science-fiction",
  plot: "farmer goes wild"
}, {
  title: "Indiana Jones I",
  genre: "adventures",
  plot: " teacher goes wild"
}, {
  title: "Jurassic Park",
  genre: "thriller",
  plot: "millionare goes wild"
}]

Movie.create(movies)
  .then(allMovies => {
    console.log(`${allMovies.length} movies created on Database`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`An error ocurred: ${err}`))