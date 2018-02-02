const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
mongoose.connect('mongodb://localhost/Celebrity');



const celebrity = [
    {
        name : "Mia Khalifa",
        occupation : "Actor X",
        catchPhrase : "Give me more ",
    },
    {
        name : "Jordi La Polla de España",
        occupation : "Actor X",
        catchPhrase : "Take Take Baby",
    },
    {
        name : "Isco Alarcon",
        occupation : "Football Player",
        catchPhrase : "Si yo soy tu bro, tu eres mi pisha",
    }
];

Celebrity.collection.drop();

celebrity.forEach( p => {
    let pr = new Celebrity(p);
    pr.save((err, cele) =>{
        if(err) {
            throw err;
        }
        console.log(`Producto guardado ${cele.name}`);
    })
});