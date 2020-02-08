const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')

const data = [{
        name: "Shaquille O' Neal",
        occupation: 'Basketball Player',
        catchPhrase: 'Reporter: "Did you visit the Parthenon during your trip to Greece?" Shaquille O\'Neal : “I can\'t really remember the names of the clubs we went to.”'
    },
    {
        name: 'Kanye West',
        occupation: 'Rapper',
        catchPhrase: "I actually don't like thinking. I think people think I like to think a lot. And I don't. I do not like to think at all."
    },
    {
        name: "Britney Spears",
        occupation: "Singer",
        catchPhrase: "I’ve never really wanted to go to Japan. Simply because I don’t like eating fish. And I know that’s very popular out there in Africa"
    }

]


const dbName = 'celebrities-w4-day5'
const connect = mongoose.connect(`mongodb://localhost/${dbName}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch(err => console.log(`Error en la conexion de DB: ${err}`))
    .then(x => {
         Celebrity.collection.drop()
    })
    .then(() => Celebrity.insertMany(data))
    .then(() => console.log(`Inserted ${data.length} celebrities`))
    .catch(err => console.log(`Error: ${err}`))
    .finally(() => mongoose.disconnect())