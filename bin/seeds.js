const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);
//sets the movies
const movies = [
    {
        title: "Hot Fuzz",
        genre: "Action Comedy",
        plot: "Two blokes overthrow a village."
    },
    {
        title: "The World's End",
        genre: "Action Comedy",
        plot: "Five blokes do a pub crawl. There are also aliens."
    },
    {
        title: "Shaun of The Dead",
        genre: "Zombie Comedy",
        plot: "Zombies hate cricket."
    }
];
//shoves the seeds into the database
Movie.create(movies)
    .then((result) => {
        console.log('created ${result.length}')
    })
    .catch((err) => {
        console.log(err);
    });

// const celebrities = [
//     {
//         name: "Buzz Lightyear",
//         occupation: "Space Ranger",
//         catchPhrase: "To infinity and beyond!"
//     },
//     {
//         name: "Woody",
//         occupation: "Sherif",
//         catchPhrase: "There's a snake in my boot."
//     },
//     {
//         name: "Master Chief",
//         occupation: "Spartan",
//         catchPhrase: "Thought I'd try shooting my way out. Mix things up a little."
//     }
// ];
//
// Celebrity.create(celebrities)
//     .then((result) => {
//         console.log('created ${result.length}')
//     })
// .catch((err)=>{
//     console.log(err);
// })