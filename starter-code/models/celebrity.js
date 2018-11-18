const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const celebritySchema = new Schema({
  name: {type: String, unique:true},
  occupation: Array,
  catchPhrase: String
})

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;