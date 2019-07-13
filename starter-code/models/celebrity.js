const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema({
  name: {type: String, minlength: 3},
  accupation: {type: String, minlength: 4, default: 'Unknown'},
  catchPhrase: {type: String, minlength: 5, default: 'None'} 
});

const Celebrity = mongoose.model('Actor', celebSchema);

module.exports = Celebrity;

