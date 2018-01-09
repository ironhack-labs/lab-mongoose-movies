const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celeb-lab');

// const celebs = [
//     {
//         name: "Carmelo Anthony",
//         occupation: "basketball player",
//         catchPhrase: "Give me the ball!"
//     },
//     {
//         name: "Bojack Horseman",
//         occupation: "actor",
//         catchPhrase: "Got any Scotch?"
//     },
//     {
//         name: "Chip Baskets",
//         occupation: "clown",
//         catchPhrase: "Hello, Martha"
//     }
// ];

// let Celeb = require("../models/celebrity");

// Celeb.create(celebs, (err, celebrities) => {
//     if (err) {
//         console.log("ERROR", err);
//     }
//     else {
//         console.log("SUCCESS", celebrities)
//     }
//     mongoose.connection.close();
// });

let Movie = require("../models/movies");

let movies = [
    {
        title: "Sweet Home Carolina",
        genre: "Romantic Comedy",
        plot: "The story of a racist state that falls in love with a carrot."
    },
    {
        title: "Little Miss Ding-Dong",
        genre: "Horror",
        plot: "A bell that kills everyone"
    },
    {
        title: "Eat Money",
        genre: "Drama",
        plot: "Two rich anorexic men learn to survive."
    }
];

Movie.create(movies, (err, films) => {
    if (err) {
        console.log("ERROR", err);
    }
    else {
        console.log("SUCCESS", films);
    }
    mongoose.connection.close();
});