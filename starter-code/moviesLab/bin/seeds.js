const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const dbName = 'moviesLab'

mongoose.connect(`mongodb://localhost:27017${dbName}`)

const celebs = [
  {
    name: "Gordon Ramsey",
    occupation: "Cook",
    catchPhrase: "F*cking Hell"
  },

  {
    name: "Franco Escamilla",
    occupation: "Comedian",
    catchPhrase: "Ah! Se mamo"
  },

  {
    name: "Sammuel L. Jackson",
    occupation: "Actor",
    catchPhrase: "Motherf*cker!"
  }
]

Celebrity.create(celebs, (err) => {
  if (err) {
    throw(err)
  }
  console.log(`Created ${celebs.length} celebs `)
  mongoose.connection.close()
});