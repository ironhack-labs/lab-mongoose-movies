
const mongoose = require('mongoose');
const Movie = require("../models/movie")
const dbName = 'movies-excercise-week4BootcampCelebrities'
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//   {
//     name: "Harry Potter",
//     occupation: "Wizard Warrior",
//     catchPhrase: "I'm the best"
//   },
//   {
//     name: "Hermione Grenger",
//     occupation: "Wizard Teacher",
//     catchPhrase: "It's leviosa, not leviosa"
//   },
//   {
//     name: "Ron Weasley",
//     occupation: "Wizard Failure",
//     catchPhrase: "Why did it have to be spiders??"
//   },
// ]

const movies = [
  {
    title: "Harry Potter",
    genre: "Fantasy",
    plot: "Harry potter thinks he's the best but Hermione's the real deal here."
  },
  {
    title: "Hunger Games",
    genre: "Fantasy",
    plot: "Get a bunch of underage kids and make 'em fight to death until only one stays alive."
  },
  {
    title: "Dogville",
    genre: "Drama",
    plot: "It's like the the best. Just watch it you fool."
  },
]


// Celebrity.create(celebrities)
//   .then(celCreated => {
//     console.log(`Creados ${celCreated.length} libros`)
//     mongoose.connection.close()
//   })
//   .catch(err => console.log(`Hubo un error: ${err}`))

Movie.create(movies)
  .then(celCreated => {
    console.log(`Creados ${celCreated.length} libros`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`Hubo un error: ${err}`))