const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require('../models/movie.model')
require('../config/db.config');

/* const celebrities = [
    {
        name: 'Harry Potter',
        occupation: 'Magician',
        catchPhrase: 'Alohomora'
    },
    {
        name: 'Ali G',
        occupation: 'Rapper',
        catchPhrase: 'Is it because I is black?'
    },
    {
        name: 'Barney Stinson',
        occupation: 'P.L.E.A.S.E.',
        catchPhrase: 'Have you met Ted'
    }
]; */

const movies = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        genre: 'Fantasy',
        plot: `A series of messages on the walls of the school's corridors warn that the "Chamber of Secrets" has been opened and that the "heir of Slytherin" would kill all pupils who do not come from all-magical families.`
    },
    {
        title: 'Ali G Indahouse',
        genre: 'Comedy',
        plot: `Ali G unwittingly becomes a pawn in the Chancellor's plot to overthrow the Prime Minister of Great Britain. However, Ali is embraced by the nation as a voice of the youth, making the PM and his government more popular than ever.`
    },
    {
        title: 'The Lord of the Rings: The Two Towers',
        genre: 'Fantasy',
        plot: `The two towers between Mordor and Isengard, Barad-dûr and Orthanc, have united in their lust for destruction. The corrupt wizard Saruman, under the power of the Dark Lord Sauron, and his slimy assistant, Gríma Wormtongue, have created a grand Uruk-hai army bent on the destruction of Man and Middle-earth.`
    }
];

/* Celebrity.create(celebrities)
    .then(celebrity => {
        console.log(`New celebrities added: ${celebrity}`);
        mongoose.connection.close();
    })
    .catch(error => console.log(error)); */

Movie.create(movies)
    .then(movie => {
        console.log(`New movies added: ${movie}`);
        mongoose.connection.close();
    })
    .catch(error => console.log(error));