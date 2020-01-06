const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new mongoose.Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String,
  },
  {
    timestamps: true,
  }
);

// compile schema into a model:
const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;