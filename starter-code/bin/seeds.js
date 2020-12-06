const data = [
    {
        name: 'Kanye West',
        occupation: 'rapper',
        catchPhrase: 'dope'
    },
    {
        name: 'Salvador Dali',
        occupation: 'painter',
        catchPhrase: 'loco'
    },
    {
        name: 'Natalie Portman',
        occupation: 'actress',
        catchPhrase: 'Leon'
    }
]

const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity') // por qué lo requerimos ??
const dotenv = require('dotenv').config() // cada vez que use una variable de entrono en un archivo hay que requerir dotenv
const dbOptions = { // para qué es dbOptions ? 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

async function seedDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URL, dbOptions)
        const celebs = await Celebrity.create(data)
        console.log(celebs)
        mongoose.connection.close()
    } catch (err) {
        console.log(err)
    }
}

seedDb()