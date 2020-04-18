const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity')

const dbName = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const celebrities = [
    {
       name: 'Steve Carrell',
       occupation: 'Comedian',
       catchPhrase: "That's what she said"

    },
    {
        name: 'Matt LeBlanc',
        occupation: 'Actor',
        catchPhrase: "How you doin"
 
     },
     {
        name: 'Lady Gaga',
        occupation: 'singer',
        catchPhrase: "I've always been famous, it's just no one knew it yet."
 
     },
]


Celebrity.create(celebrities)
    .then(allCelebrities => {
        console.log(`${allCelebrities} created`)
        mongoose.connection.close()
    })
    .catch(err => console.log(`An error ocurred: ${err}`)) 