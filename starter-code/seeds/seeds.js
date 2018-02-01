const mongoose = require('mongoose');
const Celibrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/mongoose-movies').then(() => console.log("Conectada!"));

const celebrities = [
    {
      name: "Audrey Hepburn",
      occupation: "Actriz",
      catchPhrase: "Con el tiempo y la madurez, descubrirás que tiene dos manos: una para ayudarte a ti misma y otra para ayudar a los demás."
    },
    {
      name: "Marie Curie",
      occupation: "Científica",
      catchPhrase: "Sería bueno sentir menos curiosidad por las personas y más por las ideas."
    },
    {
      name: "Frida Kahlo",
      occupation: "Artista",
      catchPhrase: "Viva la vida."
    },
    
];

Celibrity.collection.drop();

celebrities.forEach( c => {
    let ce = new Celibrity(c);
    ce.save((err, celeb) =>{
        if(err) {
            throw err;
        }
        console.log(`Celebrity guardada ${celeb.name}`);
    })
});