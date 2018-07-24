const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbtitle = 'celebrities-db';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

const celebrities = [
  {
    name: "Leo Harlem",
    ocupation: "comedian",
    catchPhrase: "La mitad de las modernidades son bobadas",
  },
  {
    name: "Berto Romero",
    ocupation: "comedian",
    catchPhrase: "Puta frase de Winston Churchils",
  },
  {
    name: "Goyo Jimenez",
    ocupation: "comedian",
    catchPhrase: "Me da vergüenza del más allá español",
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});