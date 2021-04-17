const Celebrity = require('../models/Celebrity.model');
const mongoose = require('mongoose');

// Data
const celebrities = [
    {
        name: 'Lana Del Rey',
        occupation: 'Singer',
        catchPhrase: 'Queen',
    },

    {
        name: 'The Neighbourhood',
        occupation: 'Rock Band',
        catchPhrase: 'Best',
    },

    {
        name: 'Leonardo DiCaprio',
        occupation: 'Actor',
        catchPhrase: 'Oscar',
    },
];

mongoose.connect('mongodb://localhost/celebrity-app', {useNewUrlParser: true})
    .then(() => {
        console.log('Connected to database');
        Celebrity.insertMany(celebrities)
            .then((celebrities) => {
                console.log(`${celebrities.length} inserted`)
        })
})
    .catch(error => console.error(error));

