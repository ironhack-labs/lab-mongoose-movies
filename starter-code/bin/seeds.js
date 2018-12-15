const mongoose = require('mongoose');
const Celebrity = require('../models/celebrities');
const Movie = require('../models/movies');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
    {
        name: "Monsieur Toñio",
        occupation: "Chilling",
        catchPhrase: "Tourne un p'tit peu sur toi-même, t'es mignonne dans ton costume LVMHLM"
    },
    {
        name: "Timo Cheper Salvador",
        occupation: "Kissing brasilian girls",
        catchPhrase: "C'est pas comme ça les déménagements"
    },
    {
        name: "Don Pucci",
        occupation: "Kidding",
        catchPhrase: "J'ai fait une blague !"
    },
    {
        name: "Dusān",
        occupation: "Undefined",
        catchPhrase: "C'est nul."
    },
    {
        name: "Pouna Kha",
        occupation: "Drums",
        catchPhrase: "Bonsoir mademoiselle."
    }
];


Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
});


const movies = [
    {
        title: "Monsieur Toñio & his friends",
        genre: "Horror",
        plot: "Ouais ouais"
    },
    {
        title: "Un gilet jaune amoureux",
        genre: "Comedy",
        plot: "Somewehere in Paris during a demonstration, someone felt in love."
    }
]
   
Movie.create(movies, (err) => {
        if (err) { throw (err) }
        console.log(`Created ${movies.length} movies`)
        mongoose.connection.close()
    });