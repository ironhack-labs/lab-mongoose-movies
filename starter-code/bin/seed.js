// Database
const mongoose = require('mongoose')
require("dotenv").config()

mongoose.connect(process.env.DB_LOCAL, { useNewUrlParser: true, useUnifiedTopology: true })
//Model
const Celebrity = require('../models/celebrity.model')
const { create } = require('../models/celebrity.model')

//Data

const celebrities = [
    {
        name: 'Joaquin Reyes',
        occupation: 'Humorista',
        catchPrase: 'Ay va que chorrazo',
    },

    {
        name: 'Ernesto Sevilla',
        occupation: 'Humorista',
        catchPrase: 'Vamos a partirnos el culo',

    },

    {
        name: 'Raul Cimas',
        occupation: 'Humorista',
        catchPrase: 'como te iba contando',

    }
]

//Seed

Celebrity.create(celebrities)
    .then(allTheCelebrities => {
        console.log(`Created ${allTheCelebrities.length} celebrities`)
        mongoose.connection.close();
    })
    .catch(err => console.log('The was an error creating the celebrities', err))