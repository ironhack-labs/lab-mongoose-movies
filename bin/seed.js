//DB
require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/${process.env.DB}`)


//---------------Model celebrity----------------

const Celebrity = require('../models/celebrity-model')
Celebrity.collection.drop()



const celebrities = [

    {
        name: 'Germán Álvarez',
        occupation: 'Lead Teacher',
        catchPhrase: 'It\'s party time!'
    },
    {
        name: 'Dayan Rojas',
        occupation: 'Teacher Assistant',
        catchPhrase: 'Este LAB es muy fácil'
    },
    {
        name: 'Enrique Montaño',
        occupation: 'Teacher Assistant',
        catchPhrase: 'Viva MAC'
    }

]


Celebrity
    .create(celebrities)
    .then(celebritiesArr => {
        console.log(`Has añadido a la ${process.env.DB} ${celebritiesArr.length}`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error: ', err))



//------------------ Model movie------------------

const Movie = require('../models/movie.model')
Movie.collection.drop()


const movies = [
    {
        title: 'La pesadilla de DOM',
        genre: 'terror',
        plot: 'unos alumnos de ironhack se enfrentan sin exito a DOM'
    },
    {
        title: 'Popino adventure',
        genre: 'intrigue',
        plot: 'un perro luchando contra su destino'
    },
    {
        title: 'Back',
        genre: 'Romance',
        plot: 'Elena se enamoró del back'
    },
]

Movie
    .create(movies)
    .then(moviesArr => {
        console.log(`Has añadido a la ${process.env.DB} ${moviesArr.length}`)
    })
    .catch(err => console.log('Error: ', err))