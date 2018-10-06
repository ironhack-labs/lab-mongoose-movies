// Llamando dependecias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creación  de Squema para BD 
const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  image: String
},{
  timestamps:{
    createdAt: "created_at",
    updateAt: "updated_at"
  }
});

//Exportaciòn del modelo 
module.exports = mongoose.model("Celebrity", celebritySchema);