const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movie';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name: 'Duckman',
        occupation: 'Quacker',
        catchPhrase: 'Quackeroo'
    },
    {
        name: 'Crustumer',
        occupation: 'Gamer',
        catchPhrase: 'AmIRightBois?'
    },
    {
        name: 'Yeastman',
        occupation: 'Breadwinner',
        catchPhrase: 'Yeast!!'
    }
];

Celebrity.create(celebrities, (err) => {
    if (err) {throw(err)}
    console.log('Created ${celebrities.length} celebrities');
    mongoose.connection.close();
});
