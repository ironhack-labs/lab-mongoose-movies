const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Neymar Jr.",
    occupation: "futebol player", 
    catchPhrase: "Saudades do que a gente ainda não viveu",
  }, 
  {
    name: "Maquiavel.",
    occupation: "filósofo", 
    catchPhrase: "É melhor ser temido do que amado",
  }, 
  {
    name: "Marinho",
    occupation: "futebol player", 
    catchPhrase: "Que merda hein!",
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});