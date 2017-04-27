// celebrity schema with name, occupation and catchPhrase.
// Create the Celebrity model with the schema.
// Export the Celebrity model

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name: { type: String, required: [true, 'Please enter the celebrity\'s name'] },
  occupation: { type: String },
  catchPhrase: { type: String },
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Celebrity;
