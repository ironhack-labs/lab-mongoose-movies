const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');
require('../configs/db.config');

const seeds = [
    {
        name: "Jonny Depp",
        occupation: "Actor",
        catchPhrase: `"This is the day you will always remember as the day you almost caught Captain Jack Sparrow"`
    },
    {
        name: "Bob Marley",
        occupation: "Musician",
        catchPhrase: `"One good thing about music, when it hits you, you feel no pain."`
    },
    {
        name: "Mario Vaquerizo",
        occupation: "Showman",
        catchPhrase: `'Estoy borracho gastronómicamente hablando'`
    }
]

Celebrity.create(seeds)
    .then(celebrities => {
        celebrities.forEach(celebrity => {
            console.log(`Celebrity ${celebrity.name} created!`)
            mongoose.connection.close();
        })
    })
    .catch(err => console.error(err));