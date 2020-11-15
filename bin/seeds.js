const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')

const dbsName = 'mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbsName}`)

const celebrity = [
    {
        name: 'Pau Gasol',
        ocupation: 'Jugador de baloncesto',
        catchPhrase: 'Po toma tapón',
    },
    {
        name: 'Rafael Nadal',
        ocupation: 'Jugador de tenis',
        catchPhrase: 'Vamos!',
    },
    {
        name: 'Andrés Iniesta',
        ocupation: 'Jugador de futbol',
        catchPhrase: 'Voy a tomar el sol',
    }
]

Celebrity
.create(celebrity)
    .then(allCelebritiesCreated => {
        console.log(`Created ${allCelebritiesCreated.length} celebrities`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))
