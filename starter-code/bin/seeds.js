const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/celebrity-dev').then(() => console.log("Conectado con Seeds!"));

const celebrities = [
    {
        name : "Tom Cruise",
        occupation : "actor",
        catchPhrase : "yeah",
    },
    {
        name : "Beyonce",
        occupation : "singer",
        catchPhrase : "fuck",
    },
    {
        name : "Daffy Duck",
        occupation : "comedian",
        catchPhrase : "shit",
    }
];

Celebrity.collection.drop();

celebrities.forEach( p => {
    let cel = new Celebrity(p);
    cel.save((err,cele) =>{
        if (err){
            throw err;
        }
        console.log (`Celebrity guardada ${cele.name}`)
    })
});

setTimeout(() => {
    mongoose.disconnect();
  }, 2000);