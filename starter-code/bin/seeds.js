const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.js')
const Movie = require('../models/movie.js')

const dbtitle = 'mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true })

const movies = [
  { title: "A Wrinkle in Time", genre: "fantasy fiction", plot: "Following the discovery of a new form of space travel as well as Megs father's disappearance, she, her brother, and her friend must join three magical beings - Mrs. Whatsit, Mrs. Who, and Mrs. Which - to travel across the universe to rescue him from a terrible evil" },
  { title: "The Strangers: Prey at Night", genre: "horror", plot: "A family's road trip takes a dangerous turn when they arrive at a secluded mobile home park to stay with some relatives and find it mysteriously deserted. Under the cover of darkness, three masked psychopaths pay them a visit to test the family's every limit as they struggle to survive." },
  { title: "The Hurricane Heist", genre: 'crime', plot: "Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities." },
]

const createMovies = movies.map(movie => {
  const newMovie = new Movie(movie)
  newMovie.save()
    .then(movie => console.log(movie))
    .catch(err => console.log(err))
})




// const celebrities = [
//   {name: 'Rihanna', occupation: 'singer', catchPhrase: 'work work work work work'},
//   {name: 'Lizzo', occupation: 'singer', catchPhrase: 'fresh photos with the bomb lighting'},
//   {name: 'Elsa', occupation: 'cartoon', catchPhrase: 'let it go'},
// ]

// const createCelebrities = celebrities.map(celebrity => {
//   const newCelebrity = new Celebrity(celebrity)
//   return newCelebrity.save()
//   .then((celeb) => console.log(celeb))
//   .catch(err => console.log(err))
// })