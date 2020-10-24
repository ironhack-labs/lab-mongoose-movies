const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'movies';
mongoose.connect(`mongodb://localhost/starter-code`, { useNewUrlParser: true, useUnifiedTopology: true } );

const celebrities = [
    {
        name: "Bad Bunny",
        occupation: "Singer",
        catchPhrase: "Bad bunny baby ba ba ba"
    },
    {
        name: "Anuel",
        occupation: "Singer",
        catchPhrase: "Real hasta la muerte, BEBESITA"
    },
    {
        name: "Ozuna",
        occupation: "Singer",
        catchPhrase: "El negrito de ojos claros"
    }
]


Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });