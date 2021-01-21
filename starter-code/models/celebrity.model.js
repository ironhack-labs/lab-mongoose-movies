const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  occupation: {
    type: String,
    required: 'occupation is required'
  },
  catchPhrase: {
    type: String,
    required: 'Phrase is required'
  }
},{ timestamps: true });

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity;