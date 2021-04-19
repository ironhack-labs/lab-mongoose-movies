const Celebrity = require('../models/Celebrity.model');
const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');
const DB_NAME = "starter-code"

// const starterCelebrities = [
//     {
//         name: "Anna Summer",
//         ocupattion: "Journalist",
//         catchPhrase: "Don't look at me"
//     },
//     {
//         name: "Ramone Floor",
//         ocupattion: "Singer",
//         catchPhrase: "Let me sing for you"
//     },
//     {
//         name: "Demitria Hop",
//         ocupattion: "Actress",
//         catchPhrase: "I've never won an Oscar"
//     }
// ]

// const starterMovies = [
//     {
//         title: "Saw XIX",
//         genre: "Horror",
//         plot: "Just a stupid horror movie"
//     },
//     {
//         title: "The Sims: The film",
//         genre: "Adventure",
//         plot: "The Sims are real"
//     },
//     {
//         title: "Water",
//         genre: "Drama",
//         plot: "Not water"
//     }
// ]

// mongoose.connect(`mongodb://localhost/${DB_NAME}`)
// .then(() => {
//     console.log('Connected to database only to create the first information');
//     Movie.insertMany(starterMovies)
//         .then(starterMovies => { console.log(`${starterMovies.length} inserted.`) })
// })
// .catch(error => console.error(error));
