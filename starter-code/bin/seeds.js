const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
    {
        name: "Jack O’Neill",
        occupation: "Problem Solver",
        catchPhrase: "Engage",
    },
    {
        name: "Magnum PI",
        occupation: "Problem Causer",
        catchPhrase: "Indeed",
    },
    {
        name: "Gul Dukat",
        occupation: "The Problem",
        catchPhrase: "I'm your father",
    },

];

Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
});