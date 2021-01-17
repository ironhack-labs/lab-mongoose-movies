const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
const Movie = require('../models/movie.model');
require('../configs/db.config');


/* const seeds = [
    {
        name: "Jonny Depp",
        occupation: "Actor",
        catchPhrase: `"This is the day you will always remember as the day you almost caught Captain Jack Sparrow"`
    },
    {
        name: "Bob Marley",
        occupation: "Musician",
        catchPhrase: `"One good thing about music, when it hits you, you feel no pain."`
    },
    {
        name: "Mario Vaquerizo",
        occupation: "Showman",
        catchPhrase: `'Estoy borracho gastronómicamente hablando'`
    }
]

Celebrity.create(seeds)
    .then(celebrities => {
        celebrities.forEach(celebrity => {
            console.log(`Celebrity ${celebrity.name} created!`)
            mongoose.connection.close();
        })
    })
    .catch(err => console.error(err)); */

    const seeds = [
        {
            title: "Pirates of the Caribbean",
            genre: "Adventure, Action, Fantasy",
            plot: "Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones' service, as other friends and foes seek the heart for their own agenda as well."
        },
        {
            title: "Natural Mystic",
            genre: "Fantasy",
            plot: "Bob and his friends smoke the peace pipe"
        },
        {
            title: "Nancys strike back",
            genre: "History",
            plot: "The most famous band of 20th century describes how they reach to play in Wembley beside Queen"
        }
    ]

Movie.create(seeds)
    .then(movies => {
        movies.forEach(movie => {
            console.log(`Movie ${movie.title} created!`)
            mongoose.connection.close();
        })
    })
    .catch(err => console.error(err));
