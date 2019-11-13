// const mongoose = require('mongoose');
// const Celebrity = require('../models/Celebrity');

// const dbName = 'mongoose-movies';
// mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//     {
//         name: 'Tom Cruise',
//         occupation: 'actor',
//         catchPhrase: 'Show Me the Money!'
//     },
//     {
//         name: 'Beyonce',
//         occupation: 'singer',
//         catchPhrase: 'I woke up like this.'
//     },
//     {
//         name: 'Kim Kardashian',
//         occupation: 'unknown',
//         catchPhrase: 'Doll!'
//     }
// ];

// Celebrity.create(celebrities, err => {
//     if (err) {
//         throw err;
//     }
//     console.log(`Created ${celebrities.length} celebrities`);
//     mongoose.connection.close();
// });

const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const movies = [
    {
        title: 'So Happy Together',
        genre: 'comedy',
        plot:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed semper justo, efficitur luctus risus. Morbi bibendum pretium augue, in elementum turpis laoreet at.'
    },
    {
        title: 'Stairs',
        genre: 'horror',
        plot:
            'In accumsan convallis nisl non molestie. Morbi metus elit, rhoncus nec nunc suscipit, ultrices viverra mi. Fusce at luctus purus.'
    },
    {
        title: 'Somewhere, sometimes',
        genre: 'drama',
        plot:
            'Maecenas finibus, neque eget luctus accumsan, justo magna auctor sem, id pulvinar felis ligula vitae neque.'
    }
];

Movie.create(movies, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
});
