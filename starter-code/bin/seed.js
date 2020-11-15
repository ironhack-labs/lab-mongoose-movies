const mongoose = require('mongoose')
//const Celebrity = require('../models/celebrity.model')
//const dbName = 'celebrities-movies-lab'
const Movie = require('../models/movie.model')
const dbName = 'celebrities-movies-lab'
mongoose.connect(`mongodb://localhost/${dbName}`)

// const celebrities = [
//   {
//     name: "Will Smith",
//     occupation: "Actor",
//     catchPhrase: "Aw, hell no!"
//   },
//   {
//     name: "Sheldon Cooper",
//     occupation: "Nerd",
//     catchPhrase: "Bazinga!"
//   },
//   {
//     name: "Oprah Winfrey",
//     occupation: "TV Host",
//     catchPhrase: "Aha moment!"
//   },
// ]

// Celebrity
// .create (celebrities)
//     .then(allCelebritiesCreated => {
//         console.log(`Created ${allCelebritiesCreated.length} celebrities`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('Hubo un error,', err))


//MOVIES

const movies = [
  {
    title: "Pursuit of the Robotic Butcher",
    genre: "Action",
    plot: "A robotic butcher tries to conquer the world"
  },
  {
    title: "Abduction of the Amazon rollercoaster",
    genre: "Mistery",
    plot: "A famous rollercoaster in the Amazon is abducted by aliens"
  },
  {
    title: "Vodoo Vengeance",
    genre: "Horror",
    plot: "A voodo master tortures someone that stole her favourite stone"
  },
]

Movie
.create (movies)
    .then(allMoviesCreated => {
        console.log(`Created ${allMoviesCreated.length} Movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))
