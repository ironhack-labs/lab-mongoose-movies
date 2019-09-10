const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

mongoose.connect('mongodb://localhost/lab-mongoose-movies', {
  useNewUrlParser: true
});

const celebrities = [
  {
    name: "Susana Vieira",
    occupation: "actor",
    catchPhrase: "Não tenho paciência com quem está começando!",
  },
  {
    name: "Faustão",
    occupation: "TV host",
    catchPhrase: "Ôloco, meu!",
  },
  {
    name: "Palmirinha",
    occupation: "cooker",
    catchPhrase: "Amiguinha!",
  }
 ];

 Celebrity.insertMany(celebrities)
 .then(data => {
   console.log("Success! Added " + data.length + " celebrities in the collection");
   mongoose.connection.close();
 })
 .catch(err => {
   console.log(err);
 });