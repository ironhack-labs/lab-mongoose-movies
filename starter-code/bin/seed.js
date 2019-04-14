// creamos un seed file con los modelos de celebrities

const mongoose = require('mongoose');
// requiere el modelo "celebrity"
const Celebrity = require('../models/celebrity');
const seed = require('seeds-js');



//nombramos la base de datos
const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);


// Array de las primeras celebrities
const celebrities = [{
        name: 'Khalesi',
        occupation: 'Reina de los siete reinos ',
        catchPhrase: '¡Fuego de dragón!'
    },
    {
        name: 'Michael Jackson',
        occupation: 'Rey del pop',
        catchPhrase: 'Soy Peter Pan en mi corazón'
    },
    {
        name: 'Ylenia',
        occupation: 'Despojo social',
        catchPhrase: 'tiki-tiki, meow meow'
    }
];

// Celebrity.insertMany(celebrities)
//     .then(() => {
//         console.log('Everything ok');
//         mongoose.connection.close();
//     })
//     .catch(err => {
//         console.error('Error insert to mongo', err);
//     });