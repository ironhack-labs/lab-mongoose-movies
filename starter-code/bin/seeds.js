
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/myCelebrity', {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
});

const celebrity = require('../models/celebrity');

const celebs = [
    {
        name: 'Sheng',
        ocupation: 'Business',
        catchPhrase: 'Make money or die'
    },

    {
        name: 'Linda',
        ocupation: 'Student',
        catchPhrase: 'Go vegan or die'
    },

    {
        name: 'Andre',
        ocupation: 'Teacher',
        catchPhrase: 'Learn or die'
    }
]


celebrity.create(celebs, (err, docs) => {
    if (err) {
        throw err;
    }

    docs.forEach((celebs) => {
        console.log(celebs.name)
    });
    mongoose.connection.close();
});

celebs.export = celebrity;
