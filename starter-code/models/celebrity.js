const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: {type: String, required: true}
});


module.exports = mongoose.model('Celebrity',CelebSchema);