const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const DB_NAME = 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const celebrities = [
    {
        name: 'Tom Cruise',
        occupation: 'actor',
        catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Leo de Caprio',
        occupation: 'actor',
        catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        name: 'Nicole Kidman',
        occupation: 'actor',
        catchPhrase: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
];

Celebrity.create(celebrities, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
});