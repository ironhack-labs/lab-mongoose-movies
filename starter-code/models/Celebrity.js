const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CelebSchema = new Schema({
  name: String,
  occupation: String,
  catchphrase: String
});

const Celebrity = mongoose.model('Celebrity',CelebSchema);

module.exports = Celebrity;
