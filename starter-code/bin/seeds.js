
const mongoose = require('mongoose')
//const Celebrity = require('../models/Celebrity.js')
const Movie = require('../models/Movie.js')

mongoose.connect('mongodb://localhost/starter-code')

// const initialCelebrities = [
//     {
//         name: 'Maradona',
//         occupation: 'unknown',
//         catchPhrase: 'golasoooo!'
//     },
//     {
//         name: 'Elon Musk',
//         occupation: "Visionary",
//         catchPhrase: "It's OK to have your eggs in one basket as long as you control what happens to that basket"
//     },
//     {
//         name: 'Michael Jackson',
//         occupation: 'Dancer, Singer',
//         catchPhrase: "Lies run sprints, but the truth runs marathons" 
//     }
// ]

const initialMovies = [
    {
        title: 'Parasites',
        genre: 'Drama, Thriller',
        plot: 'https://en.wikipedia.org/wiki/Parasite_(2019_film)#Plot'
    },
    {
        title: 'Inception',
        genre: 'Thriller',
        plot: 'https://en.wikipedia.org/wiki/Inception#Plot'
    },
    {
        title: 'Torrente',
        genre: 'Comedy',
        plot: 'https://en.wikipedia.org/wiki/Torrente,_el_brazo_tonto_de_la_ley#Plot'
    }
]


    // Celebrity.create(initialCelebrities)
    // .then(result=>console.log(`Success seeding "initialCelebrities"`))
    // .catch(err=> console.log(`Error while seeding "initialCelebrities"`))

    Movie.create(initialMovies)
        .then(()=>console.log(`Success seeding "initialMovies"`))
        .catch(() => console.log(`Error while seeding "initialMovies"`))