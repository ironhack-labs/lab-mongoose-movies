const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const dbName = 'celebs';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "BlisS",
//     occupation: "Teacher",
//     catchPhrase: "BlisS"
//   },
//   {
//     name: "Diego",
//     occupation: "TA",
//     catchPhrase: "JS no te espera!"
//   },
//   {
//     name: "Julian",
//     occupation: "Entrepreneur",
//     catchPhrase: "tecnología"
//   }
// ]

// Celebrity.create(celebrities, (err) => {
//   if (err) { throw (err) }
//   console.log(`Created ${celebrities.length} celebrities`)
//   mongoose.connection.close()
// })
const movies = [
  {
    title: "fight club",
    genre: "drama",
    plot: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
  },
  {
    title: "amores perros",
    genre: "drama",
    plot: "A horrific car accident connects three stories, each involving characters dealing with loss, regret, and life's harsh realities, all in the name of love."
  },
  {
    title: "Y tu mamá también",
    genre: "drama",
    plot: "In Mexico, two teenage boys and an attractive older woman embark on a road trip and learn a thing or two about life, friendship, sex, and each other."
  }
]

Movie.create(movies, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close()
})