const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'Celebrities';
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );
celebritiesSchema.collection.drop()

const celebrities = [
  {
    name: "Julian",
    occupation: "Front-end developer",
    catchPhrase: "Hola corazones",
  },
  {
    name: "Amalia",
    occupation: "Back-end developer",
    catchPhrase: "Holiiiii",
  },
  {
    name: "Dani",
    occupation: "Full-stack developer",
    catchPhrase: "Bueeeeeno... De vuelta",
  },
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length}`)
  mongoose.connection.close();
});