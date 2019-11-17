const mongoose = require('mongoose');
const Movies = require('../models/movies.model');

const dbName = 'celebrity-lab';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [{
        title: "Titanic",
        genre: "Romance / history",
        plot: "Sinking ship",
    },
    {
        title: "Pulp Fiction",
        genre: "drama / comedy",
        plot: "something",
    },
    {
        title: "Leon the Professional",
        genre: "Crime / Comedy",
        plot: "Baby killer",
    },
]
Movies.create(movies, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
})










// const mongoose = require('mongoose');
// const Celebrity = require('../models/celebrity.model');

// const dbName = 'celebrity-lab';
// mongoose.connect(`mongodb://localhost/${celebrity-lab}`);


// const celebrity = [{
//         name: "Leonardo DiCaprio",
//         occupation: "Actor",
//         catchPhrase: "I am the king of the world!",
//     },
//     {
//         name: "Madonna",
//         occupation: "Singer",
//         catchPhrase: "Like a Virgin",
//     },
//     {
//         name: "James Dean",
//         occupation: "Actor",
//         catchPhrase: "Dream as if you will live forever; Live as if you will die today.",
//     }
// ]
// Celebrity.create(celebrity, (err) => {
//     if (err) {
//         throw (err)
//     }
//     console.log(`Created ${celebrity.length} celebs`)
//     mongoose.connection.close();
// })