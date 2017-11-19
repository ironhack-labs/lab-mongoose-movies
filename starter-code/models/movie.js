const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title : { type: String, required: [true, 'A dónde vas sin nombre cuerpo escombro?'] },
  genre : String,
  plot: String,
});

const Movies = mongoose.model('Movies', movieSchema);
module.exports = Movies;
