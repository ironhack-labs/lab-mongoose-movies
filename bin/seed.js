const mongoose = require('mongoose');
const Movie = require('../models/movie.model');

const dbName = 'Celebrity';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//     {
//         name: 'Rosalía',
//         occupation: 'Singer',
//         catchPhrase: 'Malamente, tra, tra',
//     },
//     {
//         name: 'Kate Winslet',
//         occupation: 'Actress',
//         catchPhrase: 'I\'ll never let go, Jack',
//     },
//     {
//         name: 'David Broncano',
//         occupation: 'TV host',
//         catchPhrase: 'Que chorprecha',
//     }
    
// ];

// Celebrity
//     .create(celebrities)
//     .then(allCelebritiesCreated => {
//         console.log(`Created ${allCelebritiesCreated.length} celebrities`)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log('Hubo un error,', err))

const movies = [
    {
        title: 'Titanic',
        genre: 'Epic romance',
        plot: 'In 1996, treasure hunter Brock Lovett and his team board the research vessel Akademik Mstislav Keldysh to search the wreck of RMS Titanic for a necklace with a rare diamond, the Heart of the Ocean. They recover a safe containing a drawing of a young woman wearing only the necklace dated April 14, 1912, the day the ship struck the iceberg. Rose Dawson Calvert, the woman in the drawing, is brought aboard Keldysh and tells Lovett of her experiences aboard Titanic.',
    },
    {
        title: 'La comunidad',
        genre: 'Black comedy',
        plot: 'A woman discovers a treasure in the apartment of a dead man. Unfortunately, the neighbors have been waiting for the man to die so that they can seize the money for themselves.',
    },
    {
        title: 'Alvin and the Chipmunks',
        genre: 'Live computer animated musical comedy',
        plot: 'A tree that three young chipmunk brothers Alvin, Simon, and Theodore live in is cut down and driven to Los Angeles after JETT Records purchases it as a Christmas tree.',
    }

];

Movie
    .create(movies)
    .then(allMoviesCreated => {
        console.log(`Created ${allMoviesCreated.length} movies`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Hubo un error,', err))