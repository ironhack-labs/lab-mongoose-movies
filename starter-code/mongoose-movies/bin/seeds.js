const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Antonio Banderas",
    ocupation: "actor",
    catchPhrase: "Como en Málaga, en ninguna parte"
  },
  {
    name: "Amaia",
    ocupation: "singer",
    catchPhrase: "Cómo voy a sonar internacional, si yo soy de la Rioja"
  },
  {
    name: "Dalí",
    ocupation: "painter",
    catchPhrase: "Surrealismooooo"
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { console.log(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close()
});
