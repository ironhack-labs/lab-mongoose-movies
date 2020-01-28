const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity.js');

const dbtitle = 'celebrity-project';
mongoose.connect(`mongodb://localhost/${dbtitle}`);

const celebrity = [
    { name: "Diego", occupation: "Profe", catchPhrase:"Reutiliza las funciones" },
    { name: "Test", occupation: "test", catchPhrase:"test" }
  ];

Celebrity.create(celebrity)
  .then(() => {
    console.log(`created ${celebrity.length} celebrities entries`);
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
