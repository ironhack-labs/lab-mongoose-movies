const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
  name: { type: String, required: true, unique: true },
  occupation : { type: String, enum: ['Singer', 'Comedian', 'Actor', 'Unknown'] },
  catchPhrase: String
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;

