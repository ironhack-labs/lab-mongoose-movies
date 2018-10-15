const celebrities = [
  {
    name: "Raul Capoerista",
    occupation: "Bailador",
    catchPhrase: "Godzilla es tu amigo"
  },
  {
    name: "Iban el Apollo",
    occupation: "Hater",
    catchPhrase: "Huele a muerto!"
  },
  {
    name: "César el Asesino",
    occupation: "Matador",
    catchPhrase: "Estas muerto!!"
  },
];

const Celebrity = require('../models/celebrity.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/superMoviesApp')
.then(() => {
  console.log('Connected with Mongo');
  Celebrity.create(celebrities)
  .then(() => {
    console.log('Datos introducidos correctamente.Todo ok');
    mongoose.connection.close();
  })
  .catch(error => {
    console.log('Error al introducir datos',error);
    mongoose.connection.close();

  })
})

