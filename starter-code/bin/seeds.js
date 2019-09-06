const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.js')
const Movie = require('../models/movie.js')

const dbtitle = 'mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true })

const movies = [
  {
    title: "Frozen",
    genre: "fantasy fiction",
    plot: "Lorem Inpsum",
    celebrity: {
      name: 'Elsa',
      occupation: 'cartoon',
      catchPhrase: 'let it go'
    },
  },
  {
    title: "Ocean's 8",
    genre: "crime",
    plot: "Lorem Inpsum",
    celebrity: {
      name: 'Rihanna',
      occupation: 'singer',
      catchPhrase: 'work work work work work'
    },
  },

  {
    title: "Euphoria",
    genre: 'crime',
    plot: "Lorem Inpsum",
    celebrity: {
      name: 'Lizzo',
      occupation: 'singer',
      catchPhrase: 'fresh photos with the bomb lighting'
    },
  },
]


// FIRST: save celebrities in the database
const createCelebrities = movies.map(movie => {
  const newCelebrity = new Celebrity(movie.celebrity)
  return newCelebrity.save()
    .then(celebrity => celebrity.name)
    .catch(err => console.log(err))
})


// SECOND: search for the celebrity in the movies array. 
// If found, add the celebritie's objectId to the movie 
const findCelebrityInMovies = Promise.all(createCelebrities)
  .then(() => {
    return movies.map(movie => {
      return Celebrity.findOne({ name: movie.celebrity.name, occupation: movie.celebrity.occupation, catchPhrase: movie.celebrity.catchPhrase })
        .then(celebrity => {
          console.log(celebrity._id)
          if (!celebrity) {
            throw new Error('celebrity not found')
          }
          return Object.assign({}, movie, { celebrity: celebrity._id })
        })
    })
  })
  .catch(err => {
    console.log(err)
  })

// Save movies (incl. the new celebrity reference) in the database
const saveMovies = findCelebrityInMovies.then(findCelebrityInMovies => {
  return Promise.all(findCelebrityInMovies)
    .then(movies => {
      return movies.map(movie => {
        const newMovie = new Movie(movie);
        return newMovie.save()
      })
    })
}).then(savedMovies => {
  Promise.all(savedMovies)
    .then(movies => movies.forEach(movie => console.log(`created ${movie}`)))
    .then(() => mongoose.connection.close())
    .catch(err => console.log(err))
})






  // const createMovies = movies.map(movie => {
//   const newMovie = new Movie(movie)
//   newMovie.save()
//     .then(movie => console.log(movie))
//     .catch(err => console.log(err))
// })