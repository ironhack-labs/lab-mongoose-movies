var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  plot: { type: String, required: true },

});

// Compile model from schema
var movieModel = mongoose.model('SomeModel', movieSchema );


module.exports = movieModel;
