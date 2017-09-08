const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

module.exports = mongoose.model('Celebrities', CelebSchema);
