const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');
const Movies = require('../models/movies');


const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

// const celebrities = [
//     {
//         name: "Bill Murray",
//         occupation: "Actor",
//         catchPhrase: "Don't go away",
//     },
//     {
//         name: "Harry Styles",
//         occupation: "Singer",
//         catchPhrase: "Be a lover. Give love. Choose love.",
//     },
//     {
//         name: "Tyler The Creator",
//         occupation: "Singer",
//         catchPhrase: "Tamale",
//     }
// ]

// Celebrity.create(celebrities)
//     .then(allTheCelebs => {
//         console.log(`${allTheCelebs.length} celebs created!`)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log(`An error ocurred: ${err}`))


// MOVIES

const movies = [
    {
        title: "Lost in Traslation",
        genre: "Drama",
        plot: "Cosas",
    },
    {
        title: "The Godfather",
        genre: "Drama",
        plot: "Cosas",
    },
    {
        title: "The Apartment",
        genre: "Comedia",
        plot: "Cosas",
    }

]

Movies.create(movies)
    .then(allTheMovies => {
        console.log(`${allTheMovies.length} movies created!`)
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error ocurred: ${err}`))

