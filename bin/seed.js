// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity.model');

// const dbName = 'celebritiesDB';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//     {
//         name: "Leonardo Di Caprio",
//         occupation: "Actor",
//         catchPhrase: "Lorem ipsum dolor sit amet"
//     },
//     {
//         name: "Brad Pitt",
//         occupation: "Actor",
//         catchPhrase: "Lorem ipsum dolor sit amet"
//     },
//     {
//         name: "Angelina Jolie",
//         occupation: "Actriz",
//         catchPhrase: "Lorem ipsum dolor sit amet"
//     },
// ]

// Celebrity
//     .create(celebrities)
//     .then(allCelebrities => {
//         console.log(`Created ${allCelebrities.length} celebrities`)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log('Hubo un error,', err))

const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

const dbName = 'moviesDB';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
        {
            title: "Memento",
            genre: "Drama",
            plot: "Lorem ipsum dolor sit amet"
        },
        {
            title: "Saw",
            genre: "Terror",
            plot: "Lorem ipsum dolor sit amet"
        },
        {
            title: "12 en casa",
            genre: "Comedia",
            plot: "Lorem ipsum dolor sit amet"
        },
    ]
    
    Movie
        .create(movies)
        .then(allMovies => {
            console.log(`Created ${allMovies.length} movies`)
            mongoose.connection.close();
        })
        .catch(err => console.log('Hubo un error,', err))