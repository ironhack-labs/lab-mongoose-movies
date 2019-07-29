const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model')

const dbName = 'Celebrities-movies'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

Celebrity.collection.drop()
Movie.collection.drop()

// const celebrities = [
//   {
//     name: "Clint Eastwood",
//     occupation: "Director",
//     catchPhrase: "Tomorrow is promissed to no one"
//   },
//   {
//     name: "Nereo",
//     occupation: "Modelo",
//     catchPhrase: "Hey Babe, take a walk on the wildside"
//   }
// ]

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw (err) }
//   console.log("hola")
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// })

const movies = [
  {
    celebrity: {
      name: "Nereo",
      occupation: "Modelo",
      catchPhrase: "Hey Babe, take a walk on the wildside"
    },
    name: "Nereo under the moon",
    genre: "Drama",
    plot: "The woods"
  },
  {
    celebrity: {
      name: "Lucia Suelves",
      occupation: "Matemática",
      catchPhrase: "Tengo sueño"
    },
    name: "Una mente maravillosa",
    genre: "Suspense",
    plot: "Universidad"
  },
  {
    celebrity: {
      name: "Homer Simpson",
      occupation: "Bebedor",
      catchPhrase: "Trying is the first step towards failure"
    },
    name: "Falling donuts",
    genre: "Comedia",
    plot: "Dunkin donuts"
  },
  {
    celebrity: {
      name: "Descartes",
      occupation: "Filósofo",
      catchPhrase: "Pienso luego existo"
    },
    name: "Descartado",
    genre: "Documental",
    plot: "La calculadora"
  },
  {
    celebrity: {
      name: "John Lenon",
      occupation: "Singer",
      catchPhrase: "You may say I am a dreamer but I am not the only one"
    },
    name: "No where boy",
    genre: "Drama",
    plot: "UK"
  }
]

const createCelebrities = movies.map(movie => {
  const newCelebrity = new Celebrity(movie.celebrity)
  return newCelebrity.save()
    .then(celebrity => {
      return celebrity.name;
    })
    .catch(error => {
      throw new Error(`Impossible to add the celebrity. ${error}`)
    })
})

let findCelebrities = Promise.all(createCelebrities)
  .then(celebrities => {
    return movies.map(movie => {
      return Celebrity.findOne({ name: movie.celebrity.name })
        .then(celebrity => {
          if (!celebrity) {
            throw new Error(`unknown celebrity ${movie.celebrity.name} `);
          }
          return Object.assign({}, movie, { celebrity: celebrity._id });
        })
    });
  })
  .catch(error => {
    throw new Error(error)
  })

findCelebrities.then(findCelebrities => {
  return Promise.all(findCelebrities)
    .then(movies => {
      return movies.map(movie => {
        const newMovie = new Movie(movie);
        return newMovie.save();
      })
    })
}).then(savedMovies => {
  Promise.all(savedMovies)
    .then(movies => movies.forEach(movie => console.log(`created ${movie.name}`)))
    .then(() => mongoose.connection.close())
    .catch(err => console.log("Error while saving the movie: ", err))
})

// Movie.create(movies, (err) => {
//   if (err) { throw (err) }
//   console.log(`Created ${movies.length} movies`)
//   mongoose.connection.close()
// })

