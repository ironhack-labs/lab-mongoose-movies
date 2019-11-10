const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name : 'Angelina Jolie',
        occupation : 'Actress',
        catchPhrase : 'The more the merrier'
    },
    {
        name : 'Scott Weiland',
        occupation : 'Singer',
        catchPhrase : `The best I've ever had`
    },
    {
        name : 'Rafael Portugal',
        occupation : 'Comedian',
        catchPhrase : 'Perdeu playboy, passa tudo!'
    }
]

Celebrity.create(celebrities, (err) => {
    if (err) {throw(err)}
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
});
