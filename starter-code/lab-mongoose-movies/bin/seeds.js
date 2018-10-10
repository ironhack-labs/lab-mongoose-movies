const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose.connect('mongodb://localhost/lab-mongoose-movies', { useNewUrlParser: true});

const celebrities = [
    {
        name: 'Tom Cruise',
        occupation: 'actor',
        catchPhrase: 'Show me the money!'
    },
    {
        name: 'Beyonce',
        occupation: 'singer',
        catchPhrase: 'Crazy in love!'
    },
    {
        name: 'Daffy Duck',
        occupation: 'comedian',
        catchPhrase: 'Woo-hoo!'
    },
];

Celebrity.create(celebrities, err => {
    if(err) throw err;
    console.log(`Creados ${celebrities.length} celebrities`);
    mongoose.connection.close();
});

const movies = [
    {
        title: 'Lord Of The Rings',
        genre: 'Fiction',
        plot: 'Adventure',
    },
    {
        title: 'Harry Potter',
        genre: 'Fiction',
        plot: 'Magic',
    },
    {
        title: 'Twiling',
        genre: 'Best Sellers',
        plot: 'Vampires',
    }
];

Movie.create(movies, err => {
    if(err) throw err;
    console.log(`Creados ${movies.length} movies`);
    mongoose.connection.close();
});