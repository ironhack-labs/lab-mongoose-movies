const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const dbName = 'celebrities'
mongoose.connect(`mongodb://localhost/${dbName}`)


const celebrities = [
  {
    name: "Lady Bitch Ray",
    occupation: "Singer",
    catchPhrase: "I brought you a gift",
  },
  {
    name: "Cicciolina Ilona Staller",
    occupation: "Porn Star and Politician",
    catchPhrase: "Oooooh",
  },
  {
    name: "Daniel Craig",
    occupation: "Actor",
    catchPhrase: "My name is Bond. James Bond.",
  },

];

Celebrity.create(celebrities, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`${celebrities.length} "celebrities" created.`)
  mongoose.connection.close()
})