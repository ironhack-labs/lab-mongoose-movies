const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Crear esquema
const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

//Crear modelo usando el esquema
const Celebrity = mongoose.model('Celebrity', celebritySchema);

//Exportamos el modelo
module.exports = Celebrity;
