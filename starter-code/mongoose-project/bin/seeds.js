// require mongoose
const mongoose = require("mongoose");
//require model
const Movie = require("../models/movie-model");
//make database connection
mongoose.connect("mongodb://localhost/movies2");
// ...
const movies = [
    {
        name: "Movie1",
        genre: "genre1",
        plot: "plot1"

    }, {

        name: "Movie2",
        genre: "genre2",
        plot: "plot2"

    }, {
        name: "Movie3",
        genre: "genre3",
        plot: "plot3"

    }
];
Movie.create(movies, (err, savedMovies) => {
if(err){
    throw err;
}
    savedMovies.forEach(oneMovie => {
        console.log(`${oneMovie.name}`);
    });
    mongoose.disconnect();
});

//call .create()
// mongoose.disconnect()