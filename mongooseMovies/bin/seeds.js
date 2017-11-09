const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity', {useMongoClient: true});
const Celebrity= require('../models/celebrity');

Celebrity.collection.drop();

const celebrityData = [
  { name: 'Angelina Jolie', occupation: 'Actress', catchPhrase: 'Todos los días escogemos lo que somos' },
  { name: 'Shakira', occupation: 'Singer', catchPhrase: 'Waka waka' },
  { name: 'Terminator', occupation: 'Killer' , catchPhrase: 'Sayonara baby' }
];

Celebrity.create(celebrityData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(`Se ha creado ${celebrity.name}`);
  });

  mongoose.connection.close();
});
