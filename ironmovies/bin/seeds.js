const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ironmovies');
const Celebrity = require('../models/celebrity');

const celebrityData = [
  {
    name: 'Luis Aragonés',
    occupation: 'Coach',
    catchPhrase: 'Y ganar y ganar y ganar... y volver a ganar, y ganar y ganar... Eso es el fútbol'
  },
  { name: 'Jesús Gil', occupation: 'President', catchPhrase: 'Mi error ha sido tratar a los jugadores como personas' },
  { name: 'Sergio Ramos', occupation: 'Player', catchPhrase: 'El hecho de que se hayan ido los 3 puntos deja un sabor agridulce' }
];

//Call the Celebrity model's create method with the array as argument.
Celebrity.collection.drop();

Celebrity.create(celebrityData, (err, docs) => {
  if (err) { throw err; }
//In the create method's callback, display feedback.
  docs.forEach(celebrity => {
      console.log(celebrity);
    });
    mongoose.connection.close();
  });
