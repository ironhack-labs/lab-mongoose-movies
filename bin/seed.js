const mongoose = require('mongoose')
// const Celebrity = require('../models/celebrity.model')

// const dbName = 'celebrity-webmad1020'
// mongoose.connect(`mongodb://localhost/${dbName}`)

// const celebrity = [
//     {
//         name: 'Pau Gasol',
//         ocupation: 'Jugador de baloncesto',
//         catchPhrase: 'Po toma tapón',
//     },
//     {
//         name: 'Rafael Nadal',
//         ocupation: 'Jugador de tenis',
//         catchPhrase: 'Vamos!',
//     },
//     {
//         name: 'Andrés Iniesta',
//         ocupation: 'Jugador de futbol',
//         catchPhrase: 'Voy a tomar el sol',
//     }
// ]

// Celebrity
// .create(celebrity)
//     .then(allCelebritiesCreated => {
//         console.log(`Created ${allCelebritiesCreated.length} books`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log('Hubo un error,', err))







const Movie = require('../models/movie.model')

const dbName = 'mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const movie = [
    {
        title: 'Pau Gasol a lo loco',
        genre: 'Comedia',
        plot: 'Pau la lia',
    },
    {
        title: 'Rafael Nadal y sus raquetas',
        genre: 'Documental',
        plot: 'Rafa enseña su coleccion de raquetas!',
    },
    {
        title: 'Andrés Iniesta y el verano',
        genre: 'Drama',
        plot: 'La superación de las quemaduras de segundo grado que tuvo Iniesta por equivocarse de protección solar al tomar el sol',
    }
]

Movie
.create(movie)
    .then(allMoviesCreated => {
        console.log(`Created ${allMoviesCreated.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))