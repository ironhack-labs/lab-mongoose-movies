const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity")
const Movie = require("../models/Movie");

const movies = [{
        title: "Kakoo and the cacahuete",
        genre: "Drama",
        plot: 'The cacahuete was in his heart from the beginning'
    },
    {
        title: "Martine at the beach",
        genre: "Horror",
        plot: "Martine should have known that coconuts are killing way more people each year than sharks !"
    },
    {
        title: "PH, my life, my battle",
        genre: "Docu",
        plot: "The journey and peregrinations of a man learning js and struggling at each steps"
    }
]



const celebrities = [{
        name: "PH",
        occupation: "Billionaire",
        catchPhrase: "Did someone see my keys ?"
    },
    {
        name: "Johnny Depp",
        occupation: "Actor",
        catchPhrase: "Is there some Bourbon left ?"
    },
    {
        name: "John Malkovich",
        occupation: "Actor",
        catchPhrase: "John Malkovich"
    }
]

// mongoose
//     .connect('mongodb://localhost/starter-code', {
//         userNewUrlParser: true
//     })
//     .then(x => {
//         console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//     })
//     .catch(err => {
//         console.error('Error connecting to mongo', err)
//     });

// Movie.insertMany(movies)
//     .then(console.log("movies have been sent to database"))
//     .catch(err => console.log(err))

Celebrity.insertMany(celebrities)
    .then(console.log("celebrities have been sent to database"))
    .catch(err => console.log(err))