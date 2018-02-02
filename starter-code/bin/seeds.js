const mongoose = require('mongoose');
const {
    dbURL
} = require('../config');
const Celebrity = require('../models/celebrities');

mongoose.connect(dbURL).then(() => console.log("Conectado!"));

const celebrities = [{
        name: 'Tom Cruise',
        occupation: 'Jander',
        catchPhrase: 'Soy mu guapo'
    },
    {
        name: 'Beyonce',
        occupation: 'Clander',
        catchPhrase: 'Soy tó guapa'
    },
    {
        name: 'Daffy Duck',
        occupation: 'Gueynao',
        catchPhrase: 'Yo quién naranjas soy'
    }
];

Celebrity.collection.drop();

celebrities.forEach(c => {
    let cel = new Celebrity(c);
    cel.save((err, celeb) => {
        if (err) {
            throw err;
        }
        console.log(`Celeb added ${celeb.name}`);
    })
});