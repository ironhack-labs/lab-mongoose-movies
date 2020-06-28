//DataBase
const mongoose = require('mongoose');
const dbName = 'MoviesBD'
mongoose.connect(`mongodb://localhost/${dbName}`)


//Model
const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model')

//Data
const celebrities = [{
        name: '1 famous 1',
        ocupation: 'actor',
        catchPharse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

    },
    {
        name: '2 Famous 2',
        ocupation: 'singer',
        catchPharse: 'Cras volutpat lorem eu odio fringilla, vel posuere tortor eleifend.'


    },
    {
        name: '3 Famous 3',
        ocupation: 'comedian',
        catchPharse: 'Vivamus nec orci scelerisque, ultrices enim in, ullamcorper nibh.'


    }
]

const movies = [{
        title: 'title 1 movie',
        genre: 'action',
        plot: 'Lorem movie 1'

    },
    {
        title: 'title 1 movie',
        genre: 'comidian',
        plot: 'Lorem movie 2.'


    },
    {
        title: 'title 1 movie',
        genre: 'romantic',
        plot: 'Lorem movie 3.'


    }
]

//Seed
Celebrity.create(celebrities)
    .then(allCelebrities => {
        console.log(`Created ${allCelebrities.length} celebrities`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the celebrities', err))

// Movie.create(movies)
//     .then(allMovies => {
//         console.log(`Created ${allMovies.length} Movies`)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log('There was an error creating the Movies', err))