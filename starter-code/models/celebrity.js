//Este modelo es la estructura que va a tener la coleección de la bbdd, 

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebitySchema = new Schema({
  name : String,
  occupation: String,
  catchPhrase:  String
});

//Hay que exportar el modelo para que podamos utilizarlo en otor lado 

const Celebrity = mongoose.model('Celebrity', celebitySchema);
module.exports = Celebrity;