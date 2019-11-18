const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const dbName = 'Celebrity-app';
mongoose.connect(`mongodb://localhost/${dbName}`);
Celebrity.collection.drop()


const celebrity = [{
        name: "Chiquito de la Calzada",
        occupation: "Comico",
        catchPhrase: "No puedo, no puedo"
    },

    {
        name: "Carmen de Mairena",
        occupation: "actriz",
        catchPhrase: "Que coño de electricista ni electricista, tengo el coño que me hace chispas"
    }, {
        name: "Margarita seis dedos",
        occupation: "Manager",
        catchPhrase: "Ven para aca , que te doy con el ladrillo "
    }
]

Celebrity.create(celebrity, (err) => {
    if (err) {
        throw err
    }
    console.log(`Created ${celebrity.length} celebrity`)
    mongoose.connection.close();
});

