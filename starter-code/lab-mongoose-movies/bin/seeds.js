const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/lab-mongoose-movies', { useNewUrlParser: true});

const celebrities = [
    {
        name: 'Tom Cruise',
        occupation: 'actor',
        catchPhrase: 'Show me the money!'
    },
    {
        name: 'Beyonce',
        occupation: 'singer',
        catchPhrase: 'Crazy in love!'
    },
    {
        name: 'Daffy Duck',
        occupation: 'comedian',
        catchPhrase: 'Woo-hoo!'
    },
];

Celebrity.create(celebrities, err => {
    if(err) throw err;
    console.log(`Creados ${celebrities.length} celebrities`);
    mongoose.connection.close();
});