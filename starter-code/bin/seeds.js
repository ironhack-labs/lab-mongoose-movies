const celebrities = [{
        name: "Jennifer Aniston",
        occupation: "Actress",
        catchPhrase: "How's my hair?"
    },
    {
        name: "Courtney Cox",
        occupation: "Actress",
        catchPhrase: "How's my dress?"
    },
    {
        name: "David Schwimmer",
        occupation: "Actor",
        catchPhrase: "How's my monkey?"
    }
];



const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/starter-code');

// add all the Celebrities from 'Celebrities' in the database in the collection 'Celebrity'

Celebrity.insertMany(celebrities).then(documents => {
    console.log('Success ${documents.length} celebrities were added');
    mongoose.connection.close();
}).catch(err => {
    console.log(err);
});