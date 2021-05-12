const mongoose = require('mongoose')

const Celebrity = require('../models/Celebrity.model')
const Movie = require('../models/Movie.model')

require('../app')
// const celebrities = [
//     {
//         name: "Brad Pitt",
//         occupation: "Movie Actor",
//         catchPhrase: "Gorlomi"
//     },
//     {
//         name: "Leonardo DiCaprio",
//         occupation: "Movie Actor",
//         catchPhrase: "And I choose rich every time"
//     },
//     {
//         name: "Robert De Niro",
//         occupation: "Movie Actor",
//         catchPhrase: "You Talkin' to Me"
//     }

// ]

const movies = [
    {
       title: 'Fight Club',
       genre: 'Dark Comedy',
       plot: 'Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter.'
    },
    {
        title: 'The Wolf of Wall Street',
        genre: 'Crime, Dark Comedy',
        plot: 'The Wolf of Wall Street is a 2013 American epic biographical black comedy crime film directed by Martin Scorsese and written by Terence Winter, based on the 2007 memoir of the same name by Jordan Belfort. '
    },
    {
        title: 'Taxi Driver',
        genre: 'Neo Noir',
        plot: 'Taxi Driver is a 1976 American film directed by Martin Scorsese, written by Paul Schrader, and starring Robert De Niro, Jodie Foster, Cybill Shepherd, Harvey Keitel, Peter Boyle, Leonard Harris, and Albert Brooks.'
    }
]

Movie.create(movies)
  .then(dbCelebrities => {
    console.log(`Created ${dbCelebrities.length} celebrities`);
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities in the DB: ${err}`));