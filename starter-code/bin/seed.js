const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie.js')
const DB_NAME = 'celebrities-movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// const celebrities = [{
//         name: 'Robin Williams',
//         occupation: 'Actor',
//         catchPhrase: 'Spring is nature’s way of saying, Let’s party!'
//     },
//     {
//         name: 'David Bowie',
//         occupation: 'Actor',
//         catchPhrase: 'the pretty things are going to hell'
//     },
//     {
//         name: 'Meryl Streep',
//         occupation: 'Actress',
//         catchPhrase: 'True freedom is understanding that we have a choice in who and what we allow to have power over us'
//     }
// ]

// Celebrity.create(celebrities, err => {
//     if (err) {
//         throw err;
//     }
//     console.log(`Created ${celebrities.length} celebrities`);
//     mongoose.connection.close();
// })


const movies = [{
        title: "Figth Club",
        genre: "Action",
        plot: "You do not talk about FIGHT CLUB"
    },
    {
        title: "The Watchmen",
        genre: "Action",
        plot: "Everything is a joke"
    },
    {
        title: "Avengers End game",
        genre: "Action",
        plot: "I am inevitable"
    }
]

Movie.create(movies)
    .then(() => {
        console.log(`${movies.length} movies have been created`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error has occurred when creating the movies: ${err}`))