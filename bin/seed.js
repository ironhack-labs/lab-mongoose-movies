const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')

const dbName = 'Mongoose-Movies'
mongoose.connect(`mongodb://localhost/${dbName}`)

const celebrities = [
    {
        name: "Ashley Tisdale",
        occupation: "Actress",
        catchPhrase: "I need a little fabulous, is that so wrong?!",
    },
    {
        name: "Zac Efron",
        occupation: "Actor",
        catchPhrase: "I'm a guy, but I'm not afraid to cry",
    },
    {
        name: "Emma Stone",
        occupation: "Actress",
        catchPhrase: "I'm into grilled cheese. Grilled cheese makes me feel beautiful!"
    }
]

Celebrity
    
    .create(celebrities)
    .then(allCelebritiesCreated => {
        console.log(`Created ${allCelebritiesCreated.length} celebrities`)
        mongoose.connection.close()
    })
    .catch(err => console.log('Hubo un error,', err))