const moviesModel = require("../models/moviesModel");
const mongoose = require('mongoose');

const seedDataMovies = [
    {
        title: "The Godfather",
        genre: "Mafia Movie",
        plot: "become the Don"
    },
    {
        title: "Casino",
        genre: "Mafia Movie",
        plot: "become the Don"
    },
    {
        title: "Goodfellas",
        genre: "Mafia Movie",
        plot: "become the Don"
    }
]

moviesModel.insertMany(seedDataMovies, () => {
    console.log("These movies were added to the db")
})

// const celebrityModel = require("../models/celebrityModel");
// const mongoose = require('mongoose');

// const seedData = [
//     {
//         name: "Prince",
//         occupation: "Singer",
//         catchPhrase: "Unnnhhh"
//     },
//     {
//         name: "Megan Rapinoe",
//         occupation: "Athlete",
//         catchPhrase: "I'm busy"
//     },
//     {
//         name: "Ari Fitz",
//         occupation: "Other",
//         catchPhrase: "Blue Steel"
//     }
// ]

// celebrityModel.insertMany(seedData, () => {
//     console.log("These celebrities were added to the db")
// })



// mongoose
//     .connect('mongodb://localhost/movies-celebrities', { useNewUrlParser: true })
//     .then(x => {
//         console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//     })
//     .catch(err => {
//         console.error('Error connecting to mongo', err)
//     });