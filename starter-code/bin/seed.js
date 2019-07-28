const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model')

const dbName = 'Celebrities-movies'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

Celebrity.collection.drop()
Movie.collection.drop()

const celebrities = [
  {
    name: "Clint Eastwood",
    occupation: "Director",
    catchPhrase: "Tomorrow is promissed to no one"
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log("hola")
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
})

const movies = [
  {
    name: "Nereo under the moon",
    genre: "Drama",
    plot: "The woods"
  }
]

Movie.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
})

