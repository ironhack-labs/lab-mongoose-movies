const mongoose = require('mongoose');
const Celebrity = require('../models/celebrities');

const dbName = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [
    {
        name: "Monsieur Toñio",
        occupation: "Chilling",
        catchPhrase: "Tourne un p'tit peu sur toi-même, t'es mignonne dans ton costume LVMHLM"
    },
    {
        name: "Timo Cheper Salvador",
        occupation: "Kissing brasilian girls",
        catchPhrase: "C'est pas comme ça les déménagements"
    },
    {
        name: "Don Pucci",
        occupation: "Kidding",
        catchPhrase: "J'ai fait une blague !"
    },
    {
        name: "Dusān",
        occupation: "Undefined",
        catchPhrase: "C'est nul."
    },
    {
        name: "Pouna Kha",
        occupation: "Drums",
        catchPhrase: "Bonsoir mademoiselle."
    }
];


Celebrity.create(celebrities, (err) => {
    if (err) { throw (err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close()
});