const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const Movie = require('../models/movie.js')
const DB_NAME = 'mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const celebrities = [{
        name: 'Britney Spears',
        occupation: 'Singer',
        catchPhrase: "It's Britney, bitch",
    },
    {
        name: 'Lady Gaga',
        occupation: 'Singer',
        catchPhrase: 'Queen, Yas',
    },
    {
        name: 'Paris Hilton',
        occupation: 'Model',
        catchPhrase: "That's hot",
    }
];

const movies = [{
        title: "Moulin Rouge",
        genre: "musical",
        plot: "The film tells the story of a young English poet/writer, Christian (Ewan McGregor), who falls in love with the star of the Moulin Rouge, cabaret actress and courtesan Satine (Nicole Kidman).",
    },
    {
        title: "Metropolis",
        genre: "science-fiction",
        plot: "Metropolis is set in a futuristic urban dystopia and follows the attempts of Freder, the wealthy son of the city master, and Maria, a saintly figure to the workers, to overcome the vast gulf separating the classes in their city and bring the workers together with Joh Fredersen, the city master."
    },
    {
        title: "The Godfather",
        genre: "thriller",
        plot: "The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of one of his sons, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss."
    }
]

Celebrity.create(celebrities)
    .then(() => {
        console.log(`${celebrities.length} celebrities have been created`);
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error has occurred when creating the celebrities: ${err}`))

Movie.create(movies)
    .then(() => {
        console.log(`${movies.length} movies have been created`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error has occurred when creating the movies: ${err}`))