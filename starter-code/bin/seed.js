// bin/seed.js


const mongoose = require("mongoose")
const Celebrity = require('../models/celebrity.model')

const dbName = 'mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`)


const celebrities = [
    {
        name: "Cristiano Ronaldo",
        occupation: "Soccer player",
        catchPhrase: "To be the best you need the best"
    }, 
    {
        name: "Beyonce",
        occupation: "Singer",
        catchPhrase: "Power is not given to you, you have to take it."
    },
    {
        name: "Kylie Jenner",
        occupation: "Socialite",
        catchPhrase: "I don’t really regret anything."
    }
]


Celebrity
    .create(celebrities)
    .then(allCelebritiesCreated => {
        console.log(`Created ${allCelebritiesCreated.length} celebrities`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))


