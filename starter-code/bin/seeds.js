const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')

const dbName = 'CRUD-Movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [
    
    { name: 'Héctor', occupation: 'unknown', catchPhrase: 'Soy un llorón' },
    { name: 'Juan', occupation: 'singer', catchPhrase: 'Nice' },
    { name: 'Yisus', occupation: 'King of earth', catchPhrase: 'Oh my god' }

]

Celebrity
    .create(celebrities)
    .then(data => {
        console.log('Personajes incluidos en tu BBDD: ', data.length)
        mongoose.connection.close()
    })
    .catch(err => console.log('ERROR', err))