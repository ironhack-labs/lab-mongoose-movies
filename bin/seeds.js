// Database
const mongoose = require('mongoose')
const dbName = 'ironCelebrities-0620'
mongoose.connect(`mongodb://localhost/${dbName}`)

// // Model
// const Celebrity = require('../models/celebrity.model')

// // Data
// const celebrities = [{
//     name: "Santiago Segura",
//     occupation: "Comedian",
//     catchPhrase: "Too funny!"
// }, {
//     name: "Tom Cruise",
//     occupation: "Actor",
//     catchPhrase: "I\'m da sh**!"
// }, {
//     name: "Pepe Malnacío",
//     catchPhrase: "What?"
// }]

// // Seed!
// Celebrity.create(celebrities)
//     .then(allCelebrities => {
//         console.log(`Created ${allCelebrities.length} celebrities`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('DDBB error', err))


// Movie Model
const Movie = require('../models/movie.model')

// Data
const movies = [{
    title: "White Floyd",
    genre: "Terror",
    plot: "Everybody dies!"
}, {
    title: "Harry 88",
    genre: "Belic",
    plot: "Young future heads become fascist invaders!"
}, {
    title: "Dos Guarros muy guarros",
    genre: "Animal",
    plot: "Es una gaurrada!"
}]

// Seed!
Movie.create(movies)
    .then(allMovies => {
        console.log(`Created ${allMovies.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('DDBB error', err))