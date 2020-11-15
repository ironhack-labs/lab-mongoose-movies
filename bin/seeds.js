const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')

const dbName = 'dbCelebrity'
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [
    {
        name: "Harrison Ford",
        occupation: "Actor",
        catchPhrase: "X Never Marks The Spot"
    },
    {
        name: "Sarah Jessica Parker",
        occupation: "Actress",
        catchPhrase: "I couldn’t help but wonder…"
    },
    {
        name: "Kevin Costner",
        occupation: "Actor",
        catchPhrase: "Broken people say awful things and do incredibly absurd things"
    }
]

Celebrity
    .create(celebrities)
    .then(allCelebritiesCreated => {
        console.log(`Created ${allCelebritiesCreated.length} celebrities`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Error occured', err))