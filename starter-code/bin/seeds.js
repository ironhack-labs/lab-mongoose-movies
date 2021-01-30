const celebrities = [
    {
        name: "Leonardo DiCaprio",
        ocupation: "Actor",
        catchPhrase: "My true love was Rose"
    },
    {
        name: "Leo Messio",
        ocupation: "Athlete",
        catchPhrase: "I'm the GOAT"
    },
    {
        name: "Lebron James",
        ocupation: "Athlete",
        catchPhrase: "Call me King James. And I'm the GOAT too, by the way."
    }
]

require('../app')
//const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity.model')

Celebrity.create(celebrities)
    .then(createdCelebs => {
        console.log(`${createdCelebs.length} celebrities created!`)
        
    })
    .catch(error => console.log(`Error while creating a new celebrity: ${error}`))
    //.finally(mongoose.connection.close())