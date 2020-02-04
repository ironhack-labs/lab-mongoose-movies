const mongoose = require('mongoose');
const Movie = require('../models/movie');
const Celebrity = require('../models/celebrity')

mongoose
    .connect('mongodb://localhost/Mongoose-Movies', { useNewUrlParser: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.error('Error connecting to mongo', err));

Celebrity.create({
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: "Show ME the MONEY!!!!"
}, {
    name: "Heath Ledger",
    occupation: 'actor',
    catchPhrase: 'Why so serious ?'
}, {
    name: 'Robert DeNiro',
    occupation: 'Actor',
    catchPhrase: 'You talkin’ to me ?'
});

Movie.create({
    celebrity: "Robert Shaw",
    title: "Jaws",
    genre: "Suspense",
    plot: "Shark attacks"
}, {
    celebrity: "Christian Bale",
    title: "The Dark-Knight",
    genre: "Action",
    plot: "Superhero"
}, {
    celebrity: "Amy Adams",
    title: "Sunshine Cleaning",
    genre: "Drama",
    plot: "Best is yet to come"
})