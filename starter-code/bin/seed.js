
const mongoose = require('mongoose');
const Movie = require('../model/movie');

const dbName = 'celebrity-webmad1020';
mongoose.connect(`mongodb://localhost/${dbName}`);


const movies = [

    {
        title: "Gone with the wind",
        genre: "Colonial",
        plot: "Lorem Ipsum"
    },
    {
        title: "The goodfather",
        genre: "Crime",
        plot: "Lorem Ipsum"
    },
    {
        title: "Matrix",
        genre: "Sci-fy",
        plot: "Lorem Ipsum"
    }
   
    
]

Movie
    .create(movies)
    .then(allMoviesCreated => {
        console.log(`Created ${allMoviesCreated.length} movies`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Hubo un error,', err))





// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');

// const dbName = 'celebrity-webmad1020';
// mongoose.connect(`mongodb://localhost/${dbName}`);


// const celebrities = [

//     {
//         name: "Tom Cruise",
//         occupation: "Actor",
//         catchPhrase: "I feel the need...the need for speed."
//     },
//     {
//         name: "Donnie Wahlberg",
//         occupation: "Singer/Actor",
//         catchPhrase: "Spread love and love will spread."
//     },
//     {
//         name: "Lady Gaga",
//         occupation: "Singer/Actrees",
//         catchPhrase: "Hey, little monsters!."
//     }
   
    
// ]

// Celebrity
//     .create(celebrities)
//     .then(allCelebritiesCreated => {
//         console.log(`Created ${allCelebritiesCreated.length} celebrities`)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log('Hubo un error,', err))