const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbtitle = 'serverCelebrity';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true, useUnifiedTopology: true });
Celebrity.collection.drop();


const celebrities = [{
        name: "Elminster",
        occupation: "Wizard",
        catchPhrase: "Blah blah blah blah blah"
    },
    {
        name: "Drizzt'do  Urden",
        occupation: "Assassin",
        catchPhrase: "Blah blah blah blah blah"
    },
    {
        name: "Alias",
        occupation: "Warrior",
        catchPhrase: "Blah blah blah blah blah"
    },
    {
        name: "Aballister Bonadouce",
        occupation: "Estudiante",
        catchPhrase: "Blah blah blah blah blah"
    }
];

Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
});