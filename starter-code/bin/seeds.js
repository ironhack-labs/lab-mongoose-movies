const mongoose = require ('mongoose');
const Celebrity = require ('../models/Celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );

const celebrities = [
  {
  name: "David Lynch",
  occupation: "Director de cine",
  catchPhrase: "El misterio es lo que más amo, es el magnetismo de la vida, y me resulta maravilloso saber que de la mayoría de las cosas no conocemos absolutamente nada" 
  },

  {
    name: "David Bowie",
    occupation: "Músico",
    catchPhrase: "Solo soy persona que no siente que necesite que alguien califique mi trabajo de ninguna manera en particular. Estoy trabajando para mi" 
    },

    {
      name: "Johnny Cash",
      occupation: "Músico",
      catchPhrase: "Toda tu vida te enfrentarás a una elección. Puedes elegir el amor o el odio ... Yo elijo el amor. " 
      }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err)}
  console.log(`Created ${celebrities.length}celebrities`)
  mongoose.connection.close();

});
