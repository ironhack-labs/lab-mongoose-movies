const mongoose = require('mongoose')
const dbName = 'starter-code'
mongoose.connect(`mongodb://localhost/${dbName}`)

const Celebrity = require('../models/celebrity.model.js')

const celebrities = [{
            name: "Leonardo Dicaprio",
            occupation: "actor",
            catchPhrase: "I'm the king of the world!",
            
        },
        {
           name: "Tom Hanks",
           occupation: "actor",
           catchPhrase: "My mama always said, 'Life was like a box of chocolates. You never know what you're gonna get.",
            
        },
        {
            name: "Orlando Bloom",
            occupation: "actor",
            catchPhrase: "What man is a man who does not make the world better?",
            
    }
]

Celebrity.create(celebrities)
    .then(allTheCelebrities => {
        console.log(`Created ${allTheCelebrities.length} celebrities`)
        
    })
    .catch(err => console.log('There was an error creating the books', err))