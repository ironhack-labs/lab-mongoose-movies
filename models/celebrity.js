// celebrity schema with name, occupation and catchPhrase.
// Create the Celebrity model with the schema.
// Export the Celebrity model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const Celebrity = mongoose.model('Celebrity', CelebritySchema);
module.exports = Product;
