const mongoose = require('mongoose');
const Celebrities = require('../models/Celebrities');
const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);
const celebrities = [
  {
    name: "Xico da Tina",
    occupation: "Singer",
    catchPhrase: "Entrei na leiloeira Cabral Moncada a fumar ganza, ninguém disse nada",
  },
  {
    name: "Principe Ouro Negro",
    occupation: "Singer",
    catchPhrase: "um espeideeee",
  },
  {
    name: "Jorge Jesus",
    occupation: "Treinador",
    catchPhrase: "Tajaver?",
  },
  {
    name: "Leroy Jenkins",
    occupation: "Gamer",
    catchPhrase: "LEEEEEROOOOOOY JEEEEEENKIIIIIIINSSSS",
  },
]

Celebrities.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} entries`)
  mongoose.connection.close();
});