const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.model');

const dbName = 'Celebs';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true })

const celebrities = [
  {
    name: "El gran Teo",
    occupation: "TA en IronHack",
    catchPhrase: "Tranquilos chicos es fácil"
  },
  {
    name: 'Ignacio',
    occupation: "Repartidor de pizza",
    catchPhrase: "Chavales, usad Linux"
  },
  {
    name: "Alex",
    occupation: "Estudiante en IronHack",
    catchPhrase: "Ie nano"
  }]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
})