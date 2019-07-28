const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity-model');

const dbtitle = 'celebrities';
mongoose.connect(`mongodb://localhost/${dbtitle}`, { useNewUrlParser: true });

const celebrities = [
  {
    name: "Chiqito de la Calzada",
    occupation: "Humorista",
    catchPhrase: "Hombre malo, violento!"
  },
  {
    name: "Mariano",
    occupation: "Afeita bombillas",
    catchPhrase: "No hay placer mas exquisito que....bien despacito"
  },
  {
    name: "Raimunda",
    occupation: "Tuerce botas",
    catchPhrase: "Menos plato y mas suela de zapato"
  }
]

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  console.log(`Created ${celebrities.length} celebrity`)
  mongoose.connection.close();
});
