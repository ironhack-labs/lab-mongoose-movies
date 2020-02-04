const mongoose = require('mongoose');

const celebritySchma = new mongoose.Schema({
  name: String,
  occupation: String,
  catchphrase: String,
});

const Celebrity = mongoose.model('Celebrity', celebritySchma);
module.exports = Celebrity;
