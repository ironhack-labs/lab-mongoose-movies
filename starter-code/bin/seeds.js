'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', {
    useMongoClient: true
});
// const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

// const celebrities = [
//   {
//     name: 'Celebrity 1',
//     occupation: 'Occupation 1',
//     catchPhrase: 'Keeps your knees safe, slip proof, sweat proof. Top of the line',
//   },
//   {
//     name: 'Celebrity 2',
//     occupation: 'Occupation 2',
//     catchPhrase: 'Large enough for even the heaviest gamer. Crisp, fresh, no dead pixels guarantee',
//   },
//   {
//     name: 'Celebrity 3',
//     occupation: 'Occupation 3',
//     catchPhrase: 'You never have to leave your computer! All you can eat nutrition!',
//   }
// ];

const movies = [{
        title: 'Movie 1',
        genre: 'Genre 1',
        plot: 'Keeps your knees safe, slip proof, sweat proof. Top of the line',
    },
    {
        title: 'Movie 2',
        genre: 'Genre 2',
        plot: 'Large enough for even the heaviest gamer. Crisp, fresh, no dead pixels guarantee',
    },
    {
        title: 'Movie 3',
        genre: 'Genre 3',
        plot: 'You never have to leave your computer! All you can eat nutrition!',
    }
];

// Celebrity.create(celebrities, (err, docs) => {
//   if (err) {
//     throw err;
//   }
//
//   docs.forEach((celebrity) => {
//     console.log(celebrity.name);
//   });
//   mongoose.connection.close();
// });

Movie.create(movies, (err, docs) => {
    if (err) {
        throw err;
    }

    docs.forEach((movie) => {
        console.log(movie.title);
    });
    mongoose.connection.close();
});
