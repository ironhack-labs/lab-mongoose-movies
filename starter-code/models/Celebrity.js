const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebritySchema = new Schema({
  name: { type: String, required: true },
  occupation: { type: String, required: true, enum: ['actor', 'singer', 'comedian', 'unknown'] },
  catchPhrase: { type: String, required: true },
},
{
  timestamps: true,
});

const Celebrity = mongoose.model('celebrity', celebritySchema);

module.exports = Celebrity;
