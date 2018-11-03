var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  catchPhrase: { type: String, required: true },

});

// Compile model from schema
var movieModel = mongoose.model('SomeModel', movieSchema );
