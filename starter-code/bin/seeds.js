const mongoose = require('mongoose');
const Movie = require('../models/movie');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
    {
        title: "The holy grail",
        genre: "Comedy",
        plot: "What is your favourite color? and stuff..."
    },
    {
        title: "American Beauty",
        genre: "Drama",
        plot: "Looking at a bag floating in the air. and stuff..."
    },
    {
        title: "Braveheart",
        genre: "Action",
        plot: "Marron!!!"
    }
];


Movie.create(movies, (err) => {	
	if (err) { throw (err) }
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
});