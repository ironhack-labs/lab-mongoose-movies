const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String

});

// Compile model from schema
const celebrityModel = mongoose.model('celebrityModel', celebritySchema );


module.exports = celebrityModel;