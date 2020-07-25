const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'movies-project';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );

const celebrities = [
    {
        name: "Lola Flores",
        occupation: "Singer",
        catchPhrase: "Si me queréis, irsus."
    },
    {
        name: "Fernando Fernán Gómez",
        occupation: "Actor",
        catchPhrase: "¡A la mierda!"
    },
    {
        name: "Malena Gracia",
        occupation: "Vedette",
        catchPhrase: "Se toma tanta drogaína que ha de morir de una doble dosis."
    }
];

Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
});