const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/celebrities-dev').then(() => console.log("Conectado con Seeds!"));

const celebrities = [
    {
        name: "Jesus" ,
        occupation: "Speaker",
        catchPhrase: "As the Father has loved me, so have I loved you."
    },
    {
        name: "Lory Money" ,
        occupation: "Singer",
        catchPhrase: "Ola ke ase, cuentame lo ke ase",
    },
    {
        name: "Marc",
        occupation: "Teacher",
        catchPhrase: "Un detallito interesante...",
    }
];

Celebrity.collection.drop();

celebrities.forEach(c => {
    let cel = new Celebrity(c);
    cel.save((err, celebrity) => {
        if (err) {
            throw err;
        }
        console.log(`Celebrity saved ${celebrity.name}`)
    })
});

setTimeout(() => {
    mongoose.disconnect();
}, 1000);