const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose.connect('mongodb://localhost/mongoose-movies');

const celebrities = [{
        name: "Adam Sandlers ",
        occupation: "actor",
        catchPhrase: "feel free to say whatever you want lol!"
    },
    {
        name: "Ronaldhino",
        occupation: "soccer player",
        catchPhrase: "Joga Bonito!"
    },
    {
        name: "Anderson Paak",
        occupation: "singer",
        catchPhrase: "Yes Lawd!"
    },
];

Celebrity.create(celebrities, (error) => {
    if (error) { throw (error) }
    console.log(`base creada`);
    mongoose.connection.close();
});


const movies = [{
        title: "grown ups",
        genre: "family",
        plot: "lololol!"
    },
    {
        title: "Star Wars ",
        genre: "sci-fi",
        plot: "lolol!"
    },
    {
        title: "Lord of the Rings",
        genre: "drama",
        plot: "lolol!"
    },
];

Movie.create(movies, (error) => {
    if (error) { throw (error) }
    console.log(`base creada`);
    mongoose.connection.close();
});