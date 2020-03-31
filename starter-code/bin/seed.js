const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movies');

const dbName = 'movies-celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const celebrities = [{
        name: "Leonardo Di Caprio",
        occupation: "Actor",
        catchPhrase: "Sell me this pen"
    },
    {
        name: "Al Pacino",
        occupation: "Actor",
        catchPhrase: "Say hello to little friend!"
    },
    {
        name: "Matthew Mcconaughey",
        occupation: "Actor",
        catchPhrase: "Alright, alright, alright"
    }
];

Celebrity.create(celebrities, error => console.log(error));


const movies = [{
        title: "Raging Bull",
        genre: "Drama",
        plot: "De Niro plays a famous boxer who could not control his temper and ruins his own career, ending up as a stand-up comedian."
    },
    {
        title: "The Godfather",
        genre: "Drama",
        plot: "Awesome movie"
    },
    {
        title: "The Wolf of Wall Street",
        genre: "Drama/comedy",
        plot: "Stockbroker who tried to fool the system"
    }
];

Movie.create(movies, error => console.log(error));