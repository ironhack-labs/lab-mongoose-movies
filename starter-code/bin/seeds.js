const mongoose = require('mongoose');

const Celebrity = require('../models/celebrity.js');

mongoose.connect("mongodb://localhost/celebrity-dev").then(() => console.log("Conectado!"));

const celebrity = [
    {
        name: 'Espinete',
        occupation: "amigo de los niños",
        catchPhrase: 'Don pimpón es mi amigo',
    },
    {
        name: 'Antonio Resines',
        occupation: "Salir en todas las películas españolas",
        catchPhrase: 'Amanece que no es poco', 
    },
    {
        name: 'Po',
        occupation: "Teletubbie",
        catchPhrase: 'Dinki Winki', 
    }
];
Celebrity.collection.drop();

celebrity.forEach( c => {
    let cel = new Celebrity(c);
    cel.save((err, celeb) =>{
        if(err) {
            throw err;
        }
        console.log(`Celebrity guardado ${celeb.name}`);
    })
});
