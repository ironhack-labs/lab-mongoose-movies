const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');

const dbName = 'celebrities-list';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Chiquito de la Calzada",
    occupation: "Comediant",
    catchPhrase: "Fistro duodenal"
  },

  {
    name: "Eugenio",
    occupation: "Comediant",
    catchPhrase: "Saben aquel que diu"
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  console.log(celebrities);
  mongoose.connection.close()
});