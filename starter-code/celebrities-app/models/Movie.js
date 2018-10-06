// Llamando dependecias
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//Creación  de Squema para BD 
const movieSchema = new Schema({
  title: String,
  genre: String,
  plot: String,
  image: String
},{
  timestamps:{
    createdAt: "created_at",
    updateAt: "updated_at"
  }
});

//Exportaciòn del modelo 
module.exports = mongoose.model("Movie", movieSchema);