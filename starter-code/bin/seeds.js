const Celebrity = require('../models/celebrity');
const celebs = require('../data/celebs.json');

// opcion 1 para conectar con la BBDD sin llamar a la APP completa
  // const mongoose = require('mongoose');
  // mongoose
  //   .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  //   .then(x => {
  //     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  //   })
  //   .catch(err => {
  //     console.error('Error connecting to mongo', err)
  //   });

// opcion2 llamando a la APP
require('../app.js');


// opción 3 crear un db.conf.js para llamar sólo a está función del código
  // de momento voy a continuar con la opción 2, si lo he de usar de nuevo, creo db.config.js

Celebrity.create(celebs)
  .then(celebs => console.log('celebs imported to DB'))
  .catch(error => console.error('error importing DB', error))
  // .then(() => mongoose.connection.close())
