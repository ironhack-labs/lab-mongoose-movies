const celebrities = [
  {
    name: "Esau Jover",
    occupation: "Capoira Dancer",
    catchPhrase: "Vamos a bailar Capoira"
  },
  {
    name: "Iban con B",
    occupation: "Singer",
    catchPhrase: "VAa! Anocheciendoo!! Va a salir la Vampiresa!! Esa!"
  },
  {
    name: "Filipe",
    occupation: "Sugestionator",
    catchPhrase: "¿Os puedo hacer una sugestión?"
  }
];

const Celebrity = require('../models/Celebrity.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebritiesApp')
  .then( () => {
    console.log('Feeding MongoDB from Seeds.')
  })
  .catch ( (error) => {
    console.log(error);
  });

  Celebrity.create(celebrities) 
    .then((result) => {
      console.log('Adding Celebrities, success.');
      console.log(result);
      mongoose.connection.close();
    })
    .catch((error) => {
      console.log(error);
    })
  