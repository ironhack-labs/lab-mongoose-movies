const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'cinema';

const celebrities = [{
        name: 'Arnold Schwarzenegger',
        occupation: 'Actor',
        catchphrase: 'I\'ll be back',
        
    },
    {
        name: 'Dr Seuss',
        occupation: 'Writer and illustrator',
        catchphrase: 'Oh! The place you will go',
    },
    {
        name: 'Marie Curie',
        occupation: 'Physics and Chemistry Nobel Prize Winner',
        catchphrase: 'Nothing in life is to be feared; it is only to be understood.',
    },
];


mongoose
    .connect('mongodb://localhost:27017/cinema', {
        useNewUrlParser: true
    })
    .then(() => {
        return Celebrity.create(celebrities);
    })
    .then((insertedCelebrities) => {
        console.log('Inserted celebrities:', insertedCelebrities.length);
        mongoose.connection.close();
    })
    .catch((err) => console.log(err));
