const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true });

const celebrities = [
    {
        name: "Bill Murray",
        occupation: "Actor",
        catchPhrase: "Don't go away",
    },
    {
        name: "Harry Styles",
        occupation: "Singer",
        catchPhrase: "Be a lover. Give love. Choose love.",
    },
    {
        name: "Tyler The Creator",
        occupation: "Singer",
        catchPhrase: "Tamale",
    }
]

Celebrity.create(celebrities)
    .then(allTheCelebs => {
        console.log(`${allTheCelebs.length} books created!`)
        mongoose.connection.close();
    })
    .catch(err => console.log(`An error ocurred: ${err}`))  