const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.models')

const dbName = 'celebrity-lab';
mongoose.connect(`mongodb://localhost/${dbName}`, {
    userCreateIndex: true,
    userNewUrlParser: true,
    useUnifiedTopology: true,
});

const celebrity = [

    {
        name: 'Carlos Tevez',
        occupation: 'Futbolista',
        catchPhrase: 'A medida que uno va ganando cosas, se hamburguesa'

    },

    {
        name: 'Lukas Podolski',
        occupation: 'Futbolista',
        catchPhrase: 'El futbol es como el ajedrez pero sin dados'
    },

    {
        name: 'Christina Aguilera',
        occupation: 'Cantante',
        catchPhrase: '¿Donde se celebra este año el festival de Cannes?'
    },
];

Celebrity
    
    .create(celebrity)
    .then((celebrityFromDB) => {

        console.log(`Created ${celebrityFromDB.length} celebrities`);
        mongoose.connection.close();
    })

    .catch((err) => 
        console.log('Ha habido un error,', err))
    
