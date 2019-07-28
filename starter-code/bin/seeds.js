const mongoose = require("mongoose")
const Celebrity = require ("../models/celebrity.model")
const Movie = require("../models/movie.model") 

const dbName = "celebrity-movie-2019"
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser:true})

// const celebs = [{
//   name: "Arnold Schwarzy",
//   occupation: "politician, actor, filmmaker, professional bodybuilder",
//   catchPhrase:"Sayonara, baby"
// },{
//   name: "Leonardo DiCaprio",
//   occupation: "actor, film producer, and environmentalist",
//   catchPhrase:"Kill them with success and bury them with a smile"
// },{
//   name: "Jennifer Aniston",
//   occupation: "actress, film producer, and businesswoman",
//   catchPhrase:"Free love never works"
// }]

// Celebrity.create(celebs, (err)=>{
//   if (err) {throw (err)}
//   console.log(`Created ${celebs.length} celebs`)
//   mongoose.connection.close()
// })

const myMovies =[{
  title: "The Hunger Games",
  genre: "Action",
  plot: "lorem ipsum",
  celebrity: {
    "name": "Jennifer Lawrence",
    "occupation": "actress",
    "catchPhrase": "None"
    }
  }, {
  title: "Avengers",
  genre: "Action",
  plot: "lorem ipsum",
  celebrity: {
    "name": "Chris Hemsworth",
    "occupation": "actor",
    "catchPhrase": "I'm the best GOD"
  }
  }, {
  title: "Titanic",
  genre: "Drama",
  plot: "lorem ipsum",
  celebrity: {
    "name": "Kate Winslet",
    "occupation": "actress",
    "catchPhrase": "Jack was too fat to enter on the floating wood panel"
  }
  }

]

const createCelebs = myMovies.map(movie => {
  const newCeleb = new Celebrity(movie.celebrity)
  return newCeleb.save()
  .then(celebrity => {
    return celebrity.name;
  })
  .catch(error => {
    throw new Error(`Impossible to add the celebrity. ${error}`)
  })
})

let findCelebs = Promise.all(createCelebs)
  .then(celebs => {
    return myMovies.map(movie => {
      return Celebrity.findOne({name: movie.celebrity.name, occupation: movie.celebrity.occupation, catchPhrase: movie.celebrity.catchPhrase})
        .then(celebrity => {
          if(!celebrity){
            throw new Error(`unknown celebrity ${movie.celebrity.name} ${movie.celebrity.occupation} ${movie.celebrity.catchPhrase}`)
          }
          return Object.assign({}, movie, {celebrity: celebrity._id})
        })
    })
  })
  .catch(error => {
    throw new Error(error)
  })


  const saveMovies = findCelebs.then(findCelebs => {
    return Promise.all(findCelebs)
      .then(movies => {
        return movies.map(movie => {
          const newMovie = new Movie(movie);
          return newMovie.save();
        })
      })
  }).then(savedMovies => {
    Promise.all(savedMovies)
      .then(movies => movies.forEach(movie => console.log(`created ${movie.title}`)))
      .then(() => mongoose.connection.close())
      .catch(err => console.log("Error while saving the movie: ", err))
  })  