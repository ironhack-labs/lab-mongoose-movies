const moviesData = require ("./data/moovies.data")
const Movies = require ("./../../models/Movies")

const moviesSeed = async () => {
  let moviesDeleted = await Movies.deleteMany()
  let moviesCreated = await Movies.create(moviesData)
}

module.exports = moviesSeed
