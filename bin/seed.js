const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')

const dbName = 'celebrities-webmad1020'
mongoose.connect(`mongodb://localhost/${dbName}`)


const celebrities = [
    {
        name: 'John Cobra',
        occupation: 'musician',
        catchPhrase: 'Comedme la p...',
    },
    {
        name: 'Chimo Bayo',
        occupation: 'musician',
        catchPhrase: 'Chiquitan chiquititan tan tan que tun pan pan que tun pan',
    },
    {
        name: 'ElAdri',
        occupation: 'musician',
        catchPhrase: 'De que valen tantas rosas si prefieres las espinas',
    },
]



Celebrity
    .create(celebrities)
    .then(allCelebritiesCreated => {
        console.log(`Created ${allCelebritiesCreated.length} celebrities`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))