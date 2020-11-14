const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
 
const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

// celebrities commented for Iteration #7
// const celebrities = [
//     {
//         name: 'Arnold Schwarzenegger',
//         occupation: 'Actor',
//         catchPhrase: 'Stay hungry'
//     },
//     {
//         name: 'Elon Musk',
//         occupation: 'Industrial designer engineer',
//         catchPhrase: 'If you get up in the morning and think the future is going to be better, it is a bright day. Otherwise, it’s not.'    
//     },
//     {
//         name: 'Michael Jackson',
//         occupation: 'Singer',
//         catchPhrase: 'Lies run sprints, but the truth runs marathons'    
//     }
// ]

// Celebrity.create(celebrities, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${celebrities.length} celebrities`)
//     mongoose.connection.close();
//   });

//Iteration #7: The Movie Model

const movies = [
    {
        title: 'Conan the businessman',
        genre: 'Action',
        plot: 'Conan leaves iboria and comes to Wall Street in search of a new future'
    },
    {
        title: 'Escape the Dev Dream',
        genre: 'True Story',
        plot: 'An exhausted developer falls asleep and is trapped in his dream'
    },
    {
        title: 'Journey to the center of the backend',
        genre: 'Adventure',
        plot: 'Enroll in the trip and discover the wonders of this fantastic world'
    }
]

 Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
});

