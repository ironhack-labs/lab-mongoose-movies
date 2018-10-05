const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

//Conecta a la base de datos "Celebrity"
mongoose.connect(`mongodb://localhost:27017/celebrity`,{useNewUrlParser:true});

const celebrities = [
  {
    name: "Picachu",
    occupation: "Hero",
    catchPhrase:"Picachuuuu"
  },
  {
    name: "Mazinger Z",
    occupation: "Hero Robot",
    catchPhrase:"Agrrrrrr"
  },
  {
    name: "Homero Simpson",
    occupation: "Workholoic",
    catchPhrase:"Houu!!"
  }
]
Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Creados: ${celebrities.length} celebridades`)
  mongoose.connection.close()
});