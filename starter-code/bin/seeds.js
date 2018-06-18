const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'mongoose-movie';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebrities = [
//     {
//         name: 'Duckman',
//         occupation: 'Quacker',
//         catchPhrase: 'Quackeroo'
//     },
//     {
//         name: 'Crustumer',
//         occupation: 'Gamer',
//         catchPhrase: 'AmIRightBois?'
//     },
//     {
//         name: 'Yeastman',
//         occupation: 'Breadwinner',
//         catchPhrase: 'Yeast!!'
//     }
// ];

// Celebrity.create(celebrities, (err) => {
//     if (err) {throw(err)}
//     console.log('Created ${celebrities.length} celebrities');
//     mongoose.connection.close();
// });

const movies = [
    {
        title: 'Duckman Strikes again',
        genre: 'Action Film',
        plot: 'Duckman decides it\'s a good idea to strike a match again...'
    },
    {
        title: 'Crustumer games forever and ever',
        genre: 'Non-Fiction',
        plot: 'The title says it all'
    },
    {
        title: 'How to Make Bread',
        genre: 'Science Fiction',
        plot: 'Yeastman saves the day by making bread, but out of what??'
    },
    {
        title: 'Family',
        genre: 'Fantastical Thriller',
        plot: 'Duckman and Crustumer become lost in the pursuit of creating bread... who will guide them?'
    },
    {
        title: 'RomCom',
        genre: 'Romantic Fantasy',
        plot: 'What happens when Yeastman make bread with ducks?'
    },
    {
        title: 'Fantastical Brokers',
        genre: 'Musical Horror',
        plot: 'Mix harmonies with real estate and you get a surprisingly good combination'
    }
];

Movie.create(movies, (err) => {
    if (err) {throw err}
    console.log(`Created ${movies.length} movies`);
    mongoose.connection.close();
});