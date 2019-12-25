const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelSchema = new Schema({
  name:{type:String, required: true},
  occupation: String,
  catchPhrase: String,
});


module.exports = mongoose.model('Celebrity', CelSchema);