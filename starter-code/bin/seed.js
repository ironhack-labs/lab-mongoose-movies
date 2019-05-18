const mongoose = require('mongoose');
const celebrity = require('../models/celebrity')

const dbName = 'lab-mongoose-movies'
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Jesulín de Ubrique",
    occupation: "Torero",
    catchPhrase: "Im-prezionante"
  },
  {
    name: "Kiko Rivera aka Parquirrín",
    occupation: "Hijo de torero",
    catchPhrase: "Oooooo"
  },
  {
    name: "Santiago Segura",
    occupation: "Actor, guinista, director...",
    catchPhrase: "Yo que se..."
  }
]

celebrity.create(celebrities)
  .then(celebritiesCreated => {
    console.log(`**** Creados ${celebritiesCreated.length} celebrities **** `)
    mongoose.connection.close()
  })
  .catch(err => console.log(`**** ! Hubo un error: ${err}`))