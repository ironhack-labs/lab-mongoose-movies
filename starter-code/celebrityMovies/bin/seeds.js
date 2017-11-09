// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebritiesMovies', {
  useMongoClient: true
});
const Celebrity = require('../models/celebrity.js');

celebrities = [{
    name: "Tom Cruise",
    occupation: "Ganadero",
    catchPhrase: "(Sonrisa profident)"
  },
  {
    name: "Andrei",
    occupation: "Futuro Leader Teacher",
    catchPhrase: "Que tal chicuelos"
  },
  {
    name: "Rajoy",
    occupation: "Ladron",
    catchPhrase: "Es el alcalde el que quiere que sean los vecinos el alcalde"
  }
];

Celebrity.collection.drop();
// bin/seeds.js
Celebrity.create(celebrities, (err, celebrity) => {
  if (err) {
    throw err;
  }

  celebrity.forEach((author) => {
    console.log(author.name);
  });
  mongoose.connection.close();

});
