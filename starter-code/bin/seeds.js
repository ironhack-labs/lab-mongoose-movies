
const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/myCelebrity', {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE
});

const Celebrity = require('../models/celebrity');

const celebrities = [
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


celebrity.create(celebrities, (err, docs) => {
    if (err) {
        console.log('err: err');
    }

    docs.forEach((celebrities) => {
        console.log(celebrities.name);
    });
    mongoose.connection.close();
});

celebs.export = celebrity;
