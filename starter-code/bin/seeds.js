// const mongoose = require('mongoose');
// const celebrity = require('../models/Celebrity.js')

// const dbName = 'movies-project-webmad0419'
// mongoose.connect(`mongodb://localhost/${dbName}`)


// const famouse = [
//     {
//         name: 'Robin Williams',
//         occupation: 'Actor',
//         cathQuotes: 'I think the saddest people always try their hardest to make people happy. Because they know what it’s like to feel absolutely worthless and they don’t want anybody else to feel like that.'
//     },
//     {
//         name: 'Paul Walker',
//         occupation: 'Actor',
//         cathQuotes: 'If one day the speed kills me, do not cry because I was smiling.'
//     },
//     {
//         name: 'Prince Rogers Nelson',
//         occupation: 'Singer',
//         cathQuotes: 'Despite everything, no one can dictate who you are to other people.'
//     }
// ]

// celebrity.create(famouse)
//     .then(famouseCreator => {
//         console.log(`Created ${famouseCreator.length} famouses`)
//         mongoose.connection.close()
//     })
//     .catch(err => console.log(`We got an error${err}`))

const mongoose = require('mongoose');
const movie = require('../models/Movie.js')

const dbName = 'movies-project-webmad0419'
mongoose.connect(`mongodb://localhost/${dbName}`)

const movies = [
    {
        title: 'Good Will Hunting',
        genre: 'Drama',
        plot: 'Will es un joven rebelde con una inteligencia asombrosa, especialmente para las matemáticas.'
    },
    {
        title: 'Una Mente Maravillosa',
        genre: 'Drama',
        plot: 'Obsesionado con la búsqueda de una idea matemática original, el brillante estudiante John Forbes Nash (Russell Crowe) llega a Princeton en 1947 para realizar sus estudios de postgrado.'
    },
    {
        title: 'City of Angels',
        genre: 'Romance',
        plot: 'Cuando sentimos una especie de presencia invisible, es que un ángel de la guarda está entre nosotros.'
    }
]

movie.create(movies)
    .then(moviesCreator => {
        console.log(`Created ${moviesCreator.length} movies`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`We got an error${err}`))