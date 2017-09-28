const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/celebrity', {useMongoClient: true}); // not sure if we need the second part
const Celebrity = require('../models/celebrity');

const celebrities = [
  {
    name: "Famous Frank",
    occupation: "Actor",
    catchphrase: "I'm so famous, I'm Frank"
  },
  {
    name: "Celebrity Charlie",
    occupation: "Actress",
    catchphrase: "Catch me if you can"
  },
  {
    name: "Annoying Annie",
    occupation: "Model",
    catchphrase: "Don't hate me because I'm beautiful"
  },
];

Celebrity.create(celebrities, (err, celebArray) =>{ // what does .create do?
  if (err){
    console.error(error);
  }

  celebArray.forEach((celebrity) =>{
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});
