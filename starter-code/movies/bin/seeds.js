const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies', {useMongoClient: true});

const Celebrity = require('../models/celebrity');

// bin/seeds.js

const celebrity = [
 {
   name  : "Nicolas Cage",
   occupation : "Actor",
   catchPhrase   : "Live the moment",
 },

 {
   name  : "Judith Mascó",
   occupation : "Model",
   catchPhrase   : "Happy month",
 },

 {
   name  : "Alejandro Sanz",
   occupation : "Singer",
   catchPhrase   : "Don't touch the music",
 },
];

Celebrity.collection.drop(); //Elimina la colección asociada al modelo. Para que cada vez que lo ejecute, no lo vuelva a crear.


Celebrity.create(celebrity, (err, docs) => {
  //le pasamos como primer parámetro un array de objetos
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name);
  });

  //importante cerrar la conexión con mongoose
  mongoose.connection.close();
});
