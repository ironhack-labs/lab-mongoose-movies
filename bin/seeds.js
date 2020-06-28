const mongoose = require("mongoose")
const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const Celebrity = require('../models/celebrity')

const celebrities = [
    {
        name: 'Wonder Woman',
        occupation: 'heroine',
        catchPhrase: 'If no one else will defend the world, then I must.'
    },
    {
        name: 'Isabel Pantoja',
        occupation: 'singer',
        catchPhrase: 'No me vais a grabar más.'
    },
    {
        name: 'Lola Flores',
        occupation: 'singer',
        catchPhrase: 'Si me querei, irse.'
    }
]

// seed model with data and run seed file with node
Celebrity.create(celebrities)
    .then(allCelebrities => {
        console.log(`Created ${allCelebrities.length} celebrities.`)
        mongoose.connection.close()
    })
    .catch(err => console.log('There was an error creating the celebrities', err))