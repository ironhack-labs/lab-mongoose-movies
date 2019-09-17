const mongoose = require('mongoose');
const Movie = require('../models/movie');

mongoose
    .connect('mongodb://localhost/Mongoose-Movies', { useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));


Movie.create({
    title: "Jaws",
    genre: "Suspense",
    plot: "Shark attacks"
}, {
    title: "The Dark-Knight",
    genre: "Action",
    plot: "Superhero"
}, {
    title: "Sunshine Cleaning",
    genre: "Drama",
    plot: "Best is yet to come"
})