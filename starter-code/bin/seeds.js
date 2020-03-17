const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbtitle = 'celebrity';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();


const celebrities = [{
        name: "Elminster",
        occupation: "Wizard",
        catchPhrase: "Blah blah blah blah blah"
    },
    {
        name: "Drizzt'do  Urden",
        occupation: "Assassin",
        catchPhrase: "Blah blah blah blah blah"
    },
    {
        name: "Alias",
        occupation: "Warrior",
        catchPhrase: "Blah blah blah blah blah"
    },
    {
        name: "Aballister Bonadouce",
        occupation: "Estudiante",
        catchPhrase: "Blah blah blah blah blah"
    }
];

Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`)
});

const dbtitle2 = 'movie';
mongoose.connect(`mongodb://localhost/${dbtitle2}`, { useNewUrlParser: true, useUnifiedTopology: true });
Movie.collection.drop();

const movies = [{
        title: "Jurassic Park",
        genre: "Thriller",
        plot: "Blah blah blah blah blah"
    },
    {
        title: "Jurassic Park 2",
        genre: "Thriller",
        plot: "Blah blah blah blah blah"
    },
    {
        title: "Jurassic Park 3",
        genre: "Thriller",
        plot: "Blah blah blah blah blah"
    },
    {
        title: "Jurassic Park 4",
        genre: "Thriller",
        plot: "Blah blah blah blah blah"
    }
];



Movie.create(movies, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
});