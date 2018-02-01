

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebrity-db', {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
});

const Celebrity = require('../models/celebrity');

const celebrities = [
    {
        name: 'Rodrigo',
        occupation: 'Singer',
        catchPhrase: 'Fuck you Byron!'
    },
    {
        name: 'Damn',
        occupation: 'Actor',
        catchPhrase: 'Ironhack is the coolest!'
    },
    {
        name: 'Son',
        occupation: 'Comedian',
        catchPhrase: 'Its raining man, aleluia!',
    }
];

Celebrity.create(celebrities, (err, docs) => {
    if(err){
        throw err;
    }

    docs.forEach((celebrity) => {
        console.log(celebrity.name);
    });
    mongoose.connection.close();
});