const mongoose = require('mongoose')
const celeb = require('../models/celebrity')

const dbName = 'monmovies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebs = [
    {
        name: 'Jason Simms',
        occupation: 'Ironhacker',
        catchPhrase: 'GetErDone',
    },
    {
        name: 'Jason Simms2',
        occupation: 'Ironhacker',
        catchPhrase: 'GetErDone',
    },
    {
        name: 'Jason Simms3',
        occupation: 'Ironhacker',
        catchPhrase: 'GetErDone',
    }
]

celeb.create(celebs, err => {
    if (err) {
        throw err
    }
    console.log(`Created ${celebs.length} celebs`)
    mongoose.connection.close()
})