const mongoose = require('mongoose')
const Celebrity = require('../models/Celebrity')

const Name = 'celebrities'
mongoose.connect(`mongodb://localhost/${Name}`)
const celebrities = [
  {
    name: 'Bad Bunny'
    occupation: 'Singer',
    catchPhrase: 'Se acosto temprano mañana hay que estudiar'
  },
  {
    name: 'Steve Ballmer',
    occupation: 'CEO',
    catchPhrase: 'Developer developer developer'
  },
  {
    name: 'Uzielito Mix',
    occupation: 'Singer',
    catchPhrase: 'Escucha el perreo y se agacha'
  }
]
Celebrity.create(celebrities, err => {
  if (err) {
    throw err
  }
  console.log(`${celebrities.length} "celebrities" created.`)
  mongoose.connection.close()
})
