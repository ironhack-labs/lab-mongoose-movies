const Celebrity = require('../models/Celebrity.model');
const Movie = require('../models/Movie.model');
const mongoose = require('mongoose');

// Data
/*const celebrities = [
    {
        name: 'Lana Del Rey',
        occupation: 'Singer',
        catchPhrase: 'Queen',
    },

    {
        name: 'Penélope Cruz',
        occupation: 'Actress',
        catchPhrase: 'Best',
    },

    {
        name: 'Leonardo DiCaprio',
        occupation: 'Actor',
        catchPhrase: 'Oscar',
    },
];*/

const movies = [
    {
        title: 'Tropico',
        genre: 'Music video',
        plot: 'Good movie',
    },

    {
        title: 'Vicky, Cristina, Barcelona',
        genre: 'Romantic',
        plot: 'Funny movie',
    },

    {
        title: 'Great Gatsby',
        genre: 'Drama',
        plot: 'Sad movie',
    },
];

/*mongoose.connect('mongodb://localhost/celebrity-app', {useNewUrlParser: true})
    .then(() => {
        console.log('Connected to database');
        Celebrity.insertMany(celebrities)
            .then((celebrities) => {
                console.log(`${celebrities.length} inserted`)
        })
})
    .catch(error => console.error(error));*/

mongoose.connect('mongodb://localhost/celebrity-app', {useNewUrlParser: true})
.then(() => {
    console.log('Connected to database');
    Movie.insertMany(movies)
    .then((movies) => {
        console.log(`${movies.length} inserted`)
    })
})
.catch(error => console.error(error));

