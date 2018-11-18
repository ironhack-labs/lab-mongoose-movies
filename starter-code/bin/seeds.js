const mongoose = require('mongoose');
// const Celeb = require('../models/celeb');
const Movie = require('../models/movie');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

// const celebs = [
//     {
//         name: 'Matías Prats',
//         occupation: 'News Anchor',
//         catchphrase: 'Así son las cosas, y así se las hemos contado'
//     },
//     {
//         name: 'Neil Patrick Harris',
//         occupation: 'Actor',
//         catchphrase: `It's gonna be legen — wait for it — dary.`
//     },
//     {
//         name: 'Homer Simpson',
//         occupation: 'Technician',
//         catchphrase: `D'Oh`
//     },
//     {
//         name: 'Walter Cronkite',
//         occupation: 'News Anchor',
//         catchphrase: `And that's the way it is`
//     }
// ];

// Celeb.create(celebs, (err) => {
//     if (err) {throw(err)};
//     console.log(`created ${celebs.length} celebrities`);
//     mongoose.connection.close();
// });

const movies = [
    {
        title: "The Godfather",
        genre: "Drama",
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        title: "Interstellar",
        genre: "Sci-Fi",
        plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
        title: "Raiders of the Lost Ark",
        genre: "Adventure",
        plot: "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before Adolf Hitler's Nazis can obtain its awesome powers."
    }
];


Movie.create(movies, (err) => {
    if (err) {throw(err)};
    console.log(`created ${movies.length} movies`);
    mongoose.connection.close();
});