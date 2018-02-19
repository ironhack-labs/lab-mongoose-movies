const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-movies');

const Celebrity = require('../models/celebrity');

const celebrity = [
    {
        name: 'Mosi Rivera',
        occupation:'Smart Person',
        catchPhrase: 'Read a book'
    },
    {
        name: 'Helieber Sigesmundo',
        occupation:'Trying to be a Smart Person',
        catchPhrase: 'See a movie'
    },
    {
        name: 'Paul Pellerin',
        occupation:'Another Smart Person',
        catchPhrase: 'Good for you!'
    }
];

Celebrity.create(celebrity, (err, docs) => {
    if (err) {
        throw err
    }
    mongoose.connection.close();
});
