const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model');

const dbTitle = 'moviesBBDD'
mongoose.connect(`mongodb://localhost/${dbTitle}`)

// Celebrity.collection.drop()
Movie.collection.drop()

// const celebrity = [
//     {
//         name: "Gonzalo lledo",
//         occupation: "Actor",
//         catchPhrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//         name: "El demonio",
//         occupation: "Actor",
//         catchPhrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
//     {
//         name: "Estefania",
//         occupation: "Actriz",
//         catchPhrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     },
// ]

const movie = [
    {
        title: "Eragon",
        genre: "Fantasia",
        plot: "Un pueblerino que se encuentra un huevo grande, poco tiempo despues nace un dragon del huevo y se dedican a volar",
    },
    {
        title: "Dos tontos muy tontos",
        genre: "Comedia",
        plot: "Dos tontos que hacen el tonto",
    },
    {
        title: "Interstellar",
        genre: "Drama",
        plot: "La mejor pelicula del mundo",
    }
]

Movie.create(movie, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${movie.length} movies`)
    mongoose.connection.close()
})

// Celebrity.create(celebrity, (err) => {
//     if (err) { throw (err) }
//     console.log(`Created ${celebrity.length} celebrities`)
//     mongoose.connection.close()
// })