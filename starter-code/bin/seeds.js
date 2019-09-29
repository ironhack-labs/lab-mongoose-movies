const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');

const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities=[
    { name: "Galvão Bueno", ocupation: "narrador", catchPhrase: "rrrrrrrrrrrrrronaldo"},
    {name:"Faustão", ocupation:"apresentador", catchPhrase: "ta pegando fogo,bixo!"},
    {name:"Cabo Daciolo", ocupation:"politico", catchPhrase:"Gloria a Deuxxxx"}

]
Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebs`)
    mongoose.connection.close();
  });