const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebritySchema = new Schema({
  name: {type: String},
  occupation: {type: String},
  catchPhrase: {type:String},
  image: {type: String, default:"../public/images/articles-54340_imagen_portada.jpg"},

});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;