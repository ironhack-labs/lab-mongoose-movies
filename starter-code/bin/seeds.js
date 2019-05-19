const mongoose = require('mongoose');
const Movie = require('../models/Movie')

const dbName = 'Mis-Celebrities'
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
  {
    title: "Con faldas y a lo loco",
    genre: "comedia",
    plot: "Es una comedia súper divertida"

  },
  {
    title: "La vida de Brian",
    genre: "comedia",
    plot: "Es la vida de Brian"

  },
  {
    title: "cantando bajo la lluvia",
    genre: "musical",
    plot: "Es un musical en el que cantan y bailan mucho"
  }
]


Movie.create(movies)
  .then(moviesCreated => {
    console.log(`Creadas ${moviesCreated.length} movies`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`Hubo un error: ${err}`))