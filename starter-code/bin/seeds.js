const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')

const dbName = 'Celebrity-project';
mongoose.connect(`mongodb://localhost/${dbName}`), { useNewUrlParser: true, useUnifiedTopology: true};

const celebrities = [{
    name        : "Saturn",
    occupation   : "Ring-maker",
    catchPhrase : "What goes around comes around"
}, {
    name        : "Mars",
    occupation   : "Warior",
    catchPhrase : "Red is the color of love"
}, {
    name        : "Heart",
    occupation   : "Keep you alive",
    catchPhrase : "I hate humans."
}]

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });