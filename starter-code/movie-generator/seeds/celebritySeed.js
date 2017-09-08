const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

mongoose.connect('mongodb://localhost/mongoose-movies', {useMongoClient: true});

const celebrities = [{
  name : "Camen de Mairena",
  occupation : "Artista",
  catchPhrase : "Olé"
},
{
  name : "Sara Montiel",
  occupation : "Actriz",
  catchPhrase : "¿Pero que pasa, pero qué invento es esto?"
},
{
  name : "Lola Flores",
  occupation : "Cantante",
  catchPhrase : "Si me queréis irse."
}];

Celebrity.create(celebrities,(err, docs)=>{
  if(err){
    throw err;
  }
  docs.forEach((c)=>console.log(c.name));
  mongoose.connection.close();
});
