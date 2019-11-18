const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrities-project';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Mariano",
    occupation: "Actor y cantante",
    catchPhrase: "Hola mundo",
  },
  {
    name: "Luis",
    occupation: "Actor",
    catchPhrase: "Que te den",
  },
  {
    name: "Luisa María",
    occupation: "Actriz",
    catchPhrase: "Yo que se",
  },
 
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});