require("dotenv").config()
require("../app")
const Celebrity = require("../models/Celebrity.model")
const dataCelebrities = require("../dataCelebrities.json")

const Movie = require("../models/Movie.model")
const dataMovies = require ("../dataMovies.json")

// Celebrity.deleteMany()
//     .then(() => {
//         Celebrity.insertMany(dataCelebrities)
//             .then((celebrity) => {
//             console.log (celebrity)
//         })
//     })
//     .catch((e) => console.log("Error", e))

Movie.deleteMany()
    .then(() => {
        Movie.insertMany(dataMovies)
            .then((movie) => {
            console.log (movie)
        })
    })
    .catch((e) => console.log("Error", e))