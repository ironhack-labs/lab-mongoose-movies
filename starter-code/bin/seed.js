//database

const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost/starter-code`);


// //celebritymodel
 const Celebrity = require('../models/Celebrity.model');

Celebrity.collection.drop()
Movie.collection.drop()

// //celebrity data

// const celebrities = [
//     {
//         name: "Ayrton Senna",
//         occupation: "pilot",
//         catchPhrase: "The second is the first of the losers",
//     },
//     {
//         name: "B-real",
//         occupation: "singer",
//         catchPhrase: "Medio loco en el coco",
//     },
//     {
//         name: "Rafa Nadal",
//         occupation: "tenist",
//         catchPhrase: "I don 't think things change by themselves, you have to make them change",
//     },

// ];

// Celebrity.create(celebrities)
//     .then(allTheCelebrities => {
//         console.log(`Created ${allTheCelebrities.length} celebrities`)
//         mongoose.connection.close();
//     })
//     .catch(err => console.log('There was an error creating the celebrities', err))





//moviemodel
const Movie = require('../models/Movie.model');


//movie data

const Movie = [
    {
        title: "LeMans 66",
        genre: "adventure",
        plot: "everything is possiblein a car movie"
    },
    {
        title: "American Gangster",
        genre: "thriller",
        plot: "the drug movement in the 70s ",
    },
    {
        title: "Night on Earth",
        genre: "documental",
        plot: "narrates everything that happens in the natural world at night",
    },

];

Movie
    .create(Movie)
    .then(allTheMovies => {
        console.log(`Created ${allTheMovies.length} movies`)
        mongoose.connection.close();
    })
    .catch(err => console.log('There was an error creating the movies', err))

