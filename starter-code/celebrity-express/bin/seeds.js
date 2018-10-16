const Celebrity = require('../models/Celebrity')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/celebrityApp', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});


const celebritys = [
  {
    name: "Beyonce",
    occupation: "Cantante",
    catchPhrase: "Tu mayor atractivo, es tu confianza",
  },
  {
    name: "Marilyn Monroe",
    occupation: "Actriz",
    catchPhrase: "Las desilusiones, te hacen abrir los ojos, y cerrar el corazón",
  },
  {
    name: "Adele",
    occupation: "Cantante",
    catchPhrase: "Yo no hago música para los ojos, hago música para los oidos",
  }
]

Celebrity.create(celebritys)
.then(result => {
  console.log(result)
  mongoose.connection.close()
})
.catch(error => {
  console.log(error)
  mongoose.connection.close()
})