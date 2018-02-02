const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');


mongoose.connect('mongodb://localhost/celebrities-dev', );



const celebrity_seed = [
    {
        name: "Cristiano Ronaldo",
        occupation: "Futbol player",
        catchPhrase: "SIIUUUUUUU!",
    },
    {
        name: "Silvia Charro",
        occupation: "Enel & Völkers consultor",
        catchPhrase: "A tipo fijo"
    },
    {
        name: "Zinedine Zidane",
        occupation: "Football coach",
        catchPhrase: "Estamos bien saes"
    }



]
Celebrity.collection.drop()
celebrity_seed.forEach(p => {
    let celeb = new Celebrity(p);
    celeb.save((err, prod) => {
        if (err) {
            throw err;
        }
        console.log(`celebrity guardada ${prod.name}`);
    })
});
setTimeout(() => {
    mongoose.disconnect();
}, 1000);