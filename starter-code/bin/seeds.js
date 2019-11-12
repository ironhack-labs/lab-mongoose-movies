const celebrities = [{
        name: "Angela Merkel",
        occupation: "Chancellor",
        catchPhrase: "Wir schaffen das!"
    },
    {
        name: "Mr. T",
        occupation: "Actor, bodyguard, television personality, and retired professional wrestler",
        catchPhrase: "I pity the fool!",
    },
    {
        name: "Arnold Schwarzenegger",
        occupation: "Politician, actor, filmmaker, businessman, author, and former professional bodybuilder",
        catchPhrase: "Hasta la vista, baby!"
    },
]

const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity");

mongoose.connect('mongodb://localhost/celebrity-db');

Celebrity.insertMany(celebrities).then(documents => {
    console.log(`Success! ${documents.length} celebrities were added`);
    mongoose.connection.close();
}).catch(err => {
    console.log(err);
})