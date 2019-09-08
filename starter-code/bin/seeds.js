const { connect, connection } = require('mongoose')
const Celebrity = require('../models/Celebrity')

const data = [
  {
    name: 'Juan',
    occupation: 'Estudiante',
    catchPhrase: 'Pelaná'
  },
  {
    name: 'Isa',
    occupation: 'TA',
    catchPhrase: '¡Centro de salud! ¡Centro de salud! ¡Centro de salud!'
  },
  {
    name: 'Joss',
    occupation: 'Lead Teacher',
    catchPhrase: '¿Dudas?... No... Ah, bueno... *continua la clase*'
  }
]

connect('mongodb://localhost/lab-mongoose-movies')
  .then(async () => {
    const celebrities = await Celebrity.create(data)
    console.log(`${celebrities.length} celebrities created`)
    connection.close()
  })
  .catch(error => {
    console.log(error)
  })
