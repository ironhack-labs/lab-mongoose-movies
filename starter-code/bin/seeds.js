/*jshint esversion: 6 */

const mongoose = require('mongoose')
const Movie = require('../models/movie.model')

const dbName = 'CRUD-Movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const movies = [
    
    { title: 'San Miguel y los 7 botellines', genre: 'Drama', plot: 'unknown' },
    { title: 'Las aventuras de un perro en Las Vegas', genre: 'Thriller', plot: 'Dog save the 2050 World' },
    { title: 'Rojas, verdes y amarillas', genre: 'Comedy', plot: 'Great informative story about different methods of living' }

]

Movie
    .create(movies)
    .then(data => {
        console.log('Personajes incluidos en tu BBDD: ', data.length)
        mongoose.connection.close()
    })
    .catch(err => console.log('ERROR', err))


// FIRST SEEDS.JS:

// const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrity.model')

// const dbName = 'CRUD-Movies'
// mongoose.connect(`mongodb://localhost/${dbName}`)

// const celebrities = [
    
//     { name: 'Héctor', occupation: 'unknown', catchPhrase: 'Soy un llorón' },
//     { name: 'Juan', occupation: 'singer', catchPhrase: 'Nice' },
//     { name: 'Yisus', occupation: 'King of earth', catchPhrase: 'Oh my god' }

// ]

// Celebrity
//     .create(celebrities)
//     .then(data => {
//         console.log('Personajes incluidos en tu BBDD: ', data.length)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('ERROR', err))