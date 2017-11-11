const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const celebSchema = new Schema({
  name : String,
  occupation : String,
  catchPhrase : String,

});

const Celebrity = mongoose.model('celebrities', celebSchema);
module.exports = Celebrity;
