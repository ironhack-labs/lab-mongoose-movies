// bin/seeds.js

const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbtitle = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
//Celebrity.collection.drop();

const celebrities = [
    {
        name: "Audrey Hepburn",
        occupation: ["Actress", "philanthropist", "model", "dancer"],
        catchPhrase: "Nothing is impossible, the word itself says 'I'm possible'!"
    },
    {
        name: "Marilyn Monroe",
        occupation: ["Actress", "producer", "model", "singer"],
        catchPhrase: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring."
    },
    {
        name: "Christian Bale",
        occupation: ["Actor", "producer"],
        catchPhrase: "Whatever you do, do it completely. Don’t do it half-arsed. Do it more than anybody else would"
    }
]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });