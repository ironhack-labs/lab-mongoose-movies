//DB
require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/${process.env.DB}`)




const Celebrity = require('../models/celebrity.model')
Celebrity.collection.drop()



const celebrities = [

    {
        name: 'Juanito Banano',
        occupation: 'Actor',
        catchPhrase: 'Lorem ipsum dolor sit amet'
    },
    {
        name: 'Paco Jones',
        occupation: 'Actor',
        catchPhrase: 'Lorem ipsum dolor sit amet'
    },
    {
        name: 'Benito Camelback',
        occupation: 'Actor',
        catchPhrase: 'Lorem ipsum dolor sit amet'
    }

]



Celebrity
    .create(celebrities)
    .then(celebritiesArr => {
        console.log(`${celebritiesArr.length} actors added to ${process.env.DB} DB`)
        
    })
    .catch(err => console.log('Error: ', err))





const Movie = require('../models/movie.model')
Movie.collection.drop()


const movies = [

    {
        title: 'The godfather',
        genre: 'Drama',
        plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Back to the future',
        genre: 'Adventure',
        plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'El cachopo asesino',
        genre: 'Terror',
        plot: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]

Movie
    .create(movies)
    .then(moviesArr => {
        console.log(`${moviesArr.length} movies added to ${process.env.DB} DB `)
        mongoose.connection.close()
    })

    .catch(err => console.log('Error: ', err))