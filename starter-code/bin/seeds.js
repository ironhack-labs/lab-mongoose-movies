const mongoose = require('mongoose');

require('../config/db.config');

// const Celebrity = require('../models/celebrity.model');

// const celebrities = [
//     {
//         name: 'Madonna',
//         occupation: 'singer',
//         catchPhrase: 'Sick and perverted always appeals to me.' 
//     },
//     {
//         name: 'Einstein',
//         occupation: 'theoretical physicist',
//         catchPhrase: 'The difference between stupidity and genius is that genius has its limits.' 
//     },
//     {
//         name: 'Bruce Lee',
//         occupation: 'martial artist',
//         catchPhrase: 'Be water my friend'
//     }
// ]

// Celebrity.create(celebrities).then( (data) => {
//     data.forEach( (celebrity) => {
//         console.log(celebrity);
//     });
//     mongoose.connection.close();
// });


const Movies = require('../models/movies.model');

const movies = [
    {
        title: 'Movie01',
        genre: 'Action',
        plot: 'Movie01-plot' 
    },
    {
        title: 'Movie02',
        genre: 'Animation',
        plot: 'Movie02-plot' 
    },
    {
        title: 'Movie03',
        genre: 'Horror',
        plot: 'Movie03-plot' 
    }
]

Movies.create(movies).then( (data) => {
    data.forEach( (movie) => {
        console.log(movie);
    });
    mongoose.connection.close();
});