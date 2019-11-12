const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')

mongoose.connect('mongodb://localhost/starter-code')

const celebrities = [
    {
        name: 'Kim Kardashian',
        occupation: 'Unknown',
        catchPhrase: "I'm a vegan",
    },
    {
        name: 'Melz',
        occupation: 'unemployed',
        catchPhrase: "Is this a thing?",
    },
    {
        name: 'Patrick Star',
        occupation: 'Krusty Krab',
        catchPhrase: "Noooo, this is PATRICK",
    }
]

Celebrity.insertMany(celebrities)
    .then(documents => {
        console.log(`Success! ${documents.length} celebrities were added`)
        mongoose.connection.close();
    })
    .catch(err => {
        console.log(err)
    })