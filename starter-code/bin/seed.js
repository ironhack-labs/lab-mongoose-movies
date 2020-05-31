const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');
const DB_NAME = 'mongoose-movies';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const celebrities = [{
        name: 'Britney Spears',
        occupation: 'Singer',
        catchPhrase: "It's Britney, bitch",
    },
    {
        name: 'Lady Gaga',
        occupation: 'Singer',
        catchPhrase: 'Queen, Yas',
    },
    {
        name: 'Paris Hilton',
        occupation: 'Model',
        catchPhrase: "That's hot",
    }
];

Celebrity.create(celebrities)
    .then(() => {
        console.log(`${celebrities.length} celebrities have been created`);
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error has occurred when creating the celebrities: ${err}`))