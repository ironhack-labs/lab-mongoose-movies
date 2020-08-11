const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

require('../configs/db.config');

const celebrities = [
    {
    name: 'Kanye West',
    occupation: 'Future President',
    catchPhrase: 'Hi! I am Kanye!'
}, {
    name: 'Nicola Sturgeon',
    occupation: 'First Minister',
    catchPhrase: 'Scotland is ace!'
}, {
    name: 'Boris Johnstone',
    occupation: 'Prime Minister',
    catchPhrase: 'I am a twat'
}
];
const movies = [
    {
    name: 'Harry Potter',
    genre: 'Fantasy',
    plot: 'Young orphaned wizard comes up trumps'
}, {
    name: 'Waynes World',
    genre: 'Comedy',
    plot: 'Fun-loving youngsters make it big by being true to themselves'
}, {
    name: 'Home Alone',
    genre: 'Family',
    plot: 'Young boy left home alone over Christmas comabts burgulars'
}
];

Celebrity.create(celebrities)
.then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB.length} celebrities`);
    mongoose.connection.close();
})
.catch(error => console.log(`An error occurred while creating celebrities: ${error}`));

Movie.create(movies)
.then(moviesFromDB => {
    console.log(`Created ${moviesFromDB.length} movies`);
    mongoose.connection.close();
})
.catch(error => console.log(`An error occurred while creating movies: ${error}`));


