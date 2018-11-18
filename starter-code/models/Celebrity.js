const mongoose = require('mongoose');

const { Schema } = mongoose;

const CelebritySchema = new Schema({
  name: { type: String, required: true, unique: true },
  occupation: { type: String, required: true },
  catchPhrase: { type: String, required: true, unique: true },
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;
