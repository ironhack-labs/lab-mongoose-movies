const mongoose = require("mongoose")
const Movie = require('../models/movie.model')

const dbName = 'celebrity-app-web1019'
mongoose.connect(`mongodb://localhost/${dbName}`)
Movie.collection.drop()


const movies = [{
  title: "Training Day",
  genre: "Drama",
  plot: "A bitch ass cop ratting on a bad ass cop"
},
{
  title: "Saving Private Ryan",
  genre: "Drama",
  plot: "Guys losing their lives for another bitch ass soldier "
},
{
  title: "IronMan",
  genre: "Fiction",
  plot: "a Millionaire who get's bored and starts to kill people for fun"
},
{
  title: "Dumbo",
  genre: "Drama",
  plot: "A rat starts to pimp a bitch ass elephant"
}
]

Movie.create(movies, (err) => {
  if (err) { throw err }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()

})