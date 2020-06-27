const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

mongoose.connect(`mongodb://localhost/stars-films`);

//PARA BORRAR ANTES DE VOLVER A EJECUTAR
Celebrity.collection.drop();


const celebrity = [

    {
        name: "Chiquito de la Zalcada",
        occupation: "Humorista",
        catchPhrase: "Jandemor"
    },
    {
        name: "Danny BeNito",
        occupation: "Actor",
        catchPhrase: "Soy un pingüino. O algo así era."
    },
    {
        name: "Calderón de la Mierda",
        occupation: "Escritor",
        catchPhrase: "La vida es una barca"
    },



]


//SEED!

Celebrity.create(celebrity)
    .then(famousePeople => {
        console.log(`Se han creado ${famousePeople.length} famosos`)
        mongoose.connection.close();
    })
    .catch(err => console.log('Error creando famosos, call Salvame!', err))