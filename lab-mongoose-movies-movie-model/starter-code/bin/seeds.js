const mongoose = require('mongoose');
const Movie = require('../models/movies');

const dbName = 'movies-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
    {
        title: "Avengers",
        genre: "Adventure",
        plot: "Superhero film based on the Marvel Comics superhero team the Avengers"
    },
    {
        title: "Titanic",
        genre: "Drama",
        plot: "American epic romance and disaster film"
    }, 
    {
        title: "Pirates of the caribbean",
        genre: "Adventure",
        plot: "Series of five fantasy swashbuckler films"
    }
]

Movie.create(movies, (err) => {
    if (err) { throw (err)}
    console.log(`Created ${movies.length} movies!`)
    mongoose.connection.close();
});

