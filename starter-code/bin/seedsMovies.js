const mongoose = require('mongoose');
const Movie = require('../models/movies');
const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`)

const movies = [{
        title: "Titanic",
        genre: "Drama",
        plot: "lorem ipsum",
    },
    {
        title: "Rocky",
        genre: "Action",
        plot: "lorem ipsum",
    },
    {
        title: "Troya",
        genre: "War",
        plot: "lorem ipsum",
    },
]

Movie.create(movies, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
});