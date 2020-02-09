const mongoose = require('mongoose');
const Celebrity = require('../models/celebrities');
const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [{
        name: "Will Smith",
        occupation: "Actor",
        catchPhrase: "Ei whatsupp!",
    },
    {
        name: "Tego Calderon",
        occupation: "Singer",
        catchPhrase: "Damelo papi",
    },
    {
        name: "Anuel AA",
        occupation: "Artist",
        catchPhrase: "Brrrrrrrrrrr",
    },
]

Celebrity.create(celebrities, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
});