const mongoose = require('mongoose')
const Celebtity = require('../models/celebrityModel')

const dbName = 'Movies'
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })

const celebrities = [
  {
    name:"Tom Cruise",
    occupation: "actor",
    catchPhrase: "Yippee Ki Yay, Motherfucker"

  },
  {
    name: "Beyonce",
    occupation: "singer",
    catchPhrase: "We have ways to make men talk"
  },
  {
    name: "Daffy Duc",
    occupation: "comedian",
    catchPhrase: "I'm going to make him an offer he can't refuse"
  }
]

Celebtity.create(celebrities)
         .then(allCelebrities => {
           console.log(`${allCelebrities.length} celebrities created!`)
           mongoose.connection.close()
          })
          .catch(err => console.log(`An error occurred while creating the celebrity: ${err}`))