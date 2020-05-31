const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity')

const DB_NAME = 'celebrities'

mongoose
    .connect(`mongodb://localhost/${DB_NAME}`, {
        useNewUrlParser: true
    })
    .then(self => {
        console.log(`Connected to Mongo! Database name: "${self.connections[0].name}"`)
    })
    .catch(err => {
        console.error('Error connecting to mongo', err)
    });


    const celebrities = [
        {
            name: 'Robert De Niro',
            occupation: 'Actor',
            catchPhrase: "Are you talkin' to me?"
        },
        {
            name: 'Larguirucho',
            occupation: 'Comic character',
            catchPhrase: 'Habla ma fuerte, que no te escucho!'
        },
        {
            name: 'Muhammad Ali',
            occupation: 'Boxer',
            catchPhrase: "It's not bragging if you can back it up"
        },
        {
            name: 'Tony Soprano',
            occupation: 'Mobster',
            catchPhrase: 'We buried him… on a hill… overlooking a river… with pine cones all around!'
        }
    ]

    Celebrity.create(celebrities, err => {
        if(err){
            throw err;
        }
        console.log(`Numero de celebridades importadas con exito: ${celebrities.length}`);
        mongoose.connection.close();
    })