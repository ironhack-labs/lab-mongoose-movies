const mongoose = require('mongoose');
const {dbURL} = require('../config');
const Celebrity = require('../models/Celebrity');

mongoose.connect(dbURL).then(() => console.log("Conectado!"));

const celebrities = [
    {
        name: 'Brad Pitt',
        occupation: "actor",
        catchPhrase: 'cerdos y diamantes',
    },
    {
        name: 'Will Smith',
        occupation: "movie star",
        catchPhrase: 'Al oeste en philadelphia',
    },
    {
        name: 'Kanye West',
        occupation: "Rapper",
        catchPhrase: 'Hurry up with my damn croissants!',
    }
];

Celebrity.collection.drop();

celebrities.forEach( p => {
    let pr = new Celebrity(p);
    pr.save((err, cel) =>{
        if(err) {
            throw err;
        }
        console.log(`celebrity guardado ${cel.name}`);
    })
});
