const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//Celebrity??

const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;