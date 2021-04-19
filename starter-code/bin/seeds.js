const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

// const testCelebrity = [ //sample celebrities
//     {
//         name: 'Patrick Rothfuss',
//         occupation: 'Writer',
//         catchPhrase: 'I hereby attest to the fact that I can neither read nor write.'
//     },
//     {
//         name: 'Yoko Shimomura',
//         occupation: 'Composer',
//         catchPhrase: 'Anything that moves my emotion gives me inspiration.'
//     },
//     {
//         name: 'David Tennant',
//         occupation: 'Actor',
//         catchPhrase: 'I was never the cool kid at school.'
//     }
// ];

const testMovies = [ //sample movies
    {
        title: 'Wolfwalkers',
        genre: 'animation, fantasy',
        plot: 'Hunter girl turns into a wolf.'
    },
    {
        title: 'Isle of dogs',
        genre: 'stop-motion, science-fiction',
        plot: "Let's put all the dogs in one island."
    },
    {
        title: 'Pulp Fiction',
        genre: 'comedy, thriller',
        plot: 'Three different plots.'
    }
];

// mongoose
//     .connect('mongodb://localhost/starter-code', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(x => {
//         console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//         return Celebrity.insertMany(testCelebrity)
//             .then(addedCelebrity => {
//                 console.log(`Added celebrities: ${addedCelebrity.length}`);

//                 return mongoose.connection.close();
//             })           
//     })
//     .then(() => console.log("Connection closed"))
//     .catch(err => {
//         console.error('Error connecting to mongo', err)
//     });

mongoose
    .connect('mongodb://localhost/starter-code', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
        return Movie.insertMany(testMovies)
            .then(addedMovie => {
                console.log(`Added movies: ${addedMovie.length}`);

                return mongoose.connection.close();
            })
    })
    .then(() => console.log("Connection closed"))
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });