const Celebrity = require('../models/Celebrity')
const mongoose = require('mongoose')
const Movie = require('../models/Movies')
mongoose.connect(`mongodb://localhost/${process.env.DB}`, {
    useNewUrlParser: true
});
// const router = express.Router()

// THIS WAS USED TO CREATE CELEBRITIES
// const artists = [
//     {
//         firstName: "Jesus",
//         lastName: "Garcia",
//         occupation: "Soap Opera Artist",
//         catchPhrase: "Fuck Jasmin!"
//     },

//     {
//         firstName: "Hans",
//         lastName: "Garcia",
//         occupation: "Opera Artist",
//         catchPhrase: "Tesla Rocks!"
//     },
//     {
//         firstName: "Henry",
//         lastName: "Hoyos",
//         occupation: "Porn Actor",
//         catchPhrase: "I dont Get it!!"
//     }
// ]

// Celebrity.create(artists)
//     .then(data => console.log(data))

const movies = [
    {
        title: "Mi Perico Te Duerme La Boca",
        genre: "Action",
        plot: "young man gets trapped in gang problems due to poverty"
    },
    {
        title: "Toy Story",
        genre: "Action",
        plot: "Movie where toys come to life"
    },
    {
        title: "This is Footbal",
        genre: "Documentary",
        plot: "Documentary about football and howit is perceived around the world"
    }
]


Movie.create(movies)
    .then(mov => console.log('succesfully inserted', mov))