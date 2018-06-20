const mongoose = require('mongoose');
const Celebrity = require('../models/celebrities');

const dbName = 'Movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name:"Manner Main",
        occupation:"Football Player",
        catchPhrase:"I win when its convenient, it's always convenient"
    },
    {
        name:"Schema Dawson",
        occupation:"Organizer",
        catchPhrase:"You say tomatoes, i saw curl bracket!"
    },
    {
        name:"Black Harisson",
        occupation:"Actor",
        catchPhrase:"I'll see you later!"
    },
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
  });