const mongoose = require("mongoose")
const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

// const Celebrity = require('../models/celebrity')

// const celebrities = [
//     {
//         name: 'Wonder Woman',
//         occupation: 'heroine',
//         catchPhrase: 'If no one else will defend the world, then I must.'
//     },
//     {
//         name: 'Isabel Pantoja',
//         occupation: 'singer',
//         catchPhrase: 'No me vais a grabar más.'
//     },
//     {
//         name: 'Lola Flores',
//         occupation: 'singer',
//         catchPhrase: 'Si me querei, irse.'
//     }
// ]

// // seed model with data and run seed file with node
// Celebrity.create(celebrities)
//     .then(allCelebrities => {
//         console.log(`Created ${allCelebrities.length} celebrities.`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('There was an error creating the celebrities', err))



const Movie = require('../models/movie')

const movies = [
    {
        title: 'Las aventuras de Pulgarcito en el backend',
        genre: 'drama',
        plot: 'Sacadme de aquí, cabrones.'
    },
    {
        title: 'Una grande de España',
        genre: 'aventura',
        plot: 'De amor, drogas y otras historias.'
    },
    {
        title: 'Se me enamora el alma',
        genre: 'acción',
        plot: 'Eterna junto al mar.'
    }
]

// seed model with data and run seed file with node
Movie.create(movies)
    .then(allMovies => {
        console.log(`Created ${allMovies.length} movies.`)
        mongoose.connection.close()
    })
    .catch(err => console.log('There was an error creating the movies', err))