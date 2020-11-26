const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity");

const DB_NAME= 'starter-code';

mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
  {
    name: "Carmen Calvo",
    occupation: "minister",
    catchPhrase: "El dinero público no es de nadie"
  },
  {
    name: "Mariano Rajoy",
    occupation: "expresident",
    catchPhrase: "Es el vecino el que elige al alcalde y es el alcalde el que quiere que sean los vecinos el alcalde"
  },
  {
    name: "Íñigo Errejón",
    occupation: "diputy",
    catchPhrase: "La hegemonía se mueve en la tensión entre el núcleo irradiador y la seducción de los sectores aliados laterales. Afirmación - apertura"
  }
]

Celebrity.create(celebrities)
  .then((celebs) => {
    console.log(celebs);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log('There was an error', err);
  })