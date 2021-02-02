const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

const DB_NAME = 'celebrity-and-movie';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// const celebrities = [
//     {
//         name: "Jackie Chan",
//         occupation: "actor",
//         catchPhrase: "I only want my work to make people happy."
//     },
//     {
//         name: "Emma Stone",
//         occupation: "actress",
//         catchPhrase: "Flaws are my favorite part of people, usually."
//     },
//     {
//         name: "Steve Carell",
//         occupation: "commedian",
//         catchPhrase: "Nothing to me feels as good as laughing incredibly hard."
//     }
// ];

// Celebrity.create(celebrities)
//     .then(celebritiesInDB => {
//         console.log(`Created ${celebritiesInDB.length} celebrities`);
//         mongoose.connection.close();
//     })
//     .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));

const movies = [
    {
        title: "Drunken Master",
        genre: "action movie",
        plot: "plot of Drunken Master."
    },
    {
        title: "La La Land",
        genre: "musical movie",
        plot: "romance in the La la land."
    },
    {
        title: "The Office",
        genre: "TV drama",
        plot: "funny stories of a paper company"
    }
];

Movie.create(movies)
    .then(moviesInDB => {
        console.log(`Created ${moviesInDB.length} movies`);
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));