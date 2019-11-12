const celebrities = [
    {
        name: "Nicolas Cage",
        occupation: "actor",
        catchphrase: "Why wouldn't you just put the bunny back in the box?"
    },
    {
        name: "Britney Spears",
        occupation: "Singger",
        catchphrase: "Oops, I did it again!"
    },
    {
        name: "John Oliver",
        occupation: "Comedian",
        catchphrase: "Every empire has to gegt sucked down the drain. As a British person I know how that feels."
    }
]

const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/celebrities');

Celebrity.insertMany(celebrities)
    .then(documents => {
        mongoose.connection.close();
    })
    .catch (err => {
        console.log(err);
    })