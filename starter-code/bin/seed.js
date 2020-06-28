//----- DATABASE ------
const mongoose = require('mongoose')
mongoose.connect(`mongodb://localhost/starter-code`)

//---- Celibrity Model -----
const Celebrity = require('../models/Celebrity.model')



// Celebrity.collection.drop()
// Movie.collection.drop()


// ---- Celebrity DATA ----

const celebrities = [
    {
        name: 'Michael Jordan',
        occupation: 'Basketball Player',
        catchPhrase: 'Be Like Mike',
    },

    {
        name: 'Denzel Washington',
        occupation: 'Actor',
        catchPhrase: 'My Man',
    },

    {
        name: 'Snoop',
        occupation: 'Artist',
        catchPhrase: 'For shizzle',
    }
]

Celebrity
    .create(celebrities)
    .then(allTheCelebrities => {
        console.log(`Created ${allTheCelebrities.length} celebrities`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the celebrities', err))



 // --- MOVIE MODEL ---

const Movie = require('../models/Movie.model')
 
// // --- MOVIE DATA ---

const movies = [
    
    {
        title: 'Space Jam',
        genre: 'Animation',
        plot: 'Michael Jordan playing along the Looney Tunes against the Monstars',
    },

    {
        title: 'Training Day',
        genre: 'Drama',
        plot: 'A day in LA',
    },

    {
        title: 'Whiplash',
        genre: 'Drama',
        plot: 'A guy wanting to learn to play drums',
    }
];

Movie
    .create(movies)
    .then(allTheMovies => {
        console.log(`Created ${allTheMovies.length} movies`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the movies', err))
