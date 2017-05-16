const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema =  new Schema ({
  name: { type: String },
  occupation: { type: String },
  catchPhrase: { type: String },
  imageUrl: { type: String },
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;
