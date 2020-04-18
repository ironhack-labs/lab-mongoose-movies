const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const DB_NAME = 'starter-code';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const celebrities = [{
        name: 'Pikachu',
        occupation: 'full time Pokémon',
        catchPhrase: '"Pee-ka!"'
    },
    {
        name: 'Goku',
        occupation: 'World Saver',
        catchPhrase: '"AAAAAAAH!"'
    },
    {
        name: 'The Bruce Dickinson',
        occupation: 'Music Producer',
        catchPhrase: 'Guess what? I have got a fever and the only prescription is more cowbell!'
    }
];
Celebrity.create(celebrities, err => {
    if (err) {
        throw err;
    }
    console.log(`Created ${celebrities.length} celebrities`);
    mongoose.connection.close();
});