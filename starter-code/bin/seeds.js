const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const dbName = 'celebrities'
mongoose.connect(`mongodb://localhost/${dbName}`)


const celebrities = [
  {
    name: "Lady Bitch Ray",
    occupation: "Singer",
    catchPhrase: "I brought you a gift",
  },
  {
    name: "Cicciolina Ilona Staller",
    occupation: "Porn Star and Politician",
    catchPhrase: "Oooooh",
  },
  {
    name: "Daniel Craig",
    occupation: "Actor",
    catchPhrase: "My name is Bond. James Bond.",
  },

];

Celebrity.create(celebrities, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`${celebrities.length} "celebrities" created.`)
  mongoose.connection.close()
})


// const Movie = require('../models/Movie')

// const dbName = 'celebrities'
// mongoose.connect(`mongodb://localhost/${dbName}`)


// const movies = [
//   {
//     title: "just a movie",
//     genre: "comedy",
//     plot: "A really ncie movie",
//   },
//   {
//     title: "just a movie 2",
//     genre: "Horror",
//     plot: "I dont understand this movie but is good",
//   },
//   {
//     title: "WTF movie",
//     genre: "Thriller",
//     plot: "Just a thriller movie that make you say WTF",
//   },

// ];

// Movie.create(movies, (err) => {
//   if (err) {
//     throw (err)
//   }
//   console.log(`${movies.length} "movies" created.`)
//   mongoose.connection.close()
// }) 